const express = require('express');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Core README.lint transformation logic
class ReadmeLinter {
  constructor() {
    this.template = {
      sections: [
        { emoji: '🌸', level: 1, title: 'Why use ${REPO_NAME}?' },
        { emoji: '🌸🌸', level: 2, title: 'Who ${BENEFITS FROM THIS REPO}' },
        { emoji: '🌸🌸🌸', level: 3, title: 'What ${EXACTLY DOES THIS DO?}' },
        { emoji: '🌸🌸🌸🌸', level: 4, title: 'How ${DO I USE IT? HOW DOES IT WORK?}' },
        { emoji: '🌸🌸🌸🌸🌸', level: 5, title: 'Extras' }
      ]
    };
  }

  async fetchGithubReadme(owner, repo) {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
      const response = await axios.get(url, {
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch README: ${error.message}`);
    }
  }

  extractRepoInfo(content, owner, repo) {
    // Basic analysis of existing content
    const lines = content.split('\n');
    const hasTitle = lines.some(line => line.match(/^#\s+/));
    const hasInstallInstructions = content.toLowerCase().includes('install');
    const hasUsageSection = content.toLowerCase().includes('usage') || content.toLowerCase().includes('how to');
    
    return {
      hasTitle,
      hasInstallInstructions,
      hasUsageSection,
      originalContent: content,
      repoName: repo,
      owner: owner
    };
  }

  transformToReadmeLint(content, owner, repo) {
    const info = this.extractRepoInfo(content, owner, repo);
    let linted = '';

    // Add conformance badge
    linted += `[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)\n\n`;

    // Section 1: Why
    linted += `🌸 Why use ${repo}?\n`;
    linted += '=============================\n\n';
    
    if (this.hasWhyContent(content)) {
      linted += this.extractWhyContent(content);
    } else {
      linted += `*Why did ${owner} go to the trouble of writing this?*\n\n`;
      linted += `[This section needs to be filled in by the repository maintainers]\n\n`;
    }

    // Section 2: Who
    linted += `🌸🌸 Who benefits from ${repo}?\n`;
    linted += '=============================\n\n';
    
    if (this.hasWhoContent(content)) {
      linted += this.extractWhoContent(content);
    } else {
      linted += `*Who did ${owner} write this for?*\n\n`;
      linted += `[This section needs to be filled in by the repository maintainers]\n\n`;
    }

    // Section 3: What
    linted += `🌸🌸🌸 What does ${repo} do?\n`;
    linted += '=============================\n\n';
    
    linted += this.extractWhatContent(content, repo);

    // Section 4: How
    linted += `🌸🌸🌸🌸 How do I use ${repo}?\n`;
    linted += '=============================\n\n';
    
    linted += this.extractHowContent(content);

    // Section 5: Extras
    linted += '🌸🌸🌸🌸🌸 Extras\n';
    linted += '=============================\n\n';
    
    linted += this.extractExtrasContent(content);

    return linted;
  }

  hasWhyContent(content) {
    const whyKeywords = ['why', 'motivation', 'rationale', 'purpose'];
    return whyKeywords.some(keyword => 
      content.toLowerCase().includes(keyword) && 
      content.toLowerCase().includes(keyword + ' ')
    );
  }

  hasWhoContent(content) {
    const whoKeywords = ['audience', 'users', 'for developers', 'target'];
    return whoKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractWhyContent(content) {
    // Simple extraction - look for sections that might contain "why" information
    const lines = content.split('\n');
    let whySection = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].toLowerCase();
      if (line.includes('why') || line.includes('motivation') || line.includes('purpose')) {
        // Extract this section
        let j = i;
        while (j < lines.length && !lines[j].match(/^#{1,6}\s/)) {
          whySection += lines[j] + '\n';
          j++;
        }
        break;
      }
    }
    
    return whySection || `[Content extracted from original README - needs review]\n\n`;
  }

  extractWhoContent(content) {
    return `[Content needs to be extracted or inferred - repository maintainers should specify target audience]\n\n`;
  }

  extractWhatContent(content, repo) {
    // Extract the first substantial paragraph or description
    const lines = content.split('\n');
    let description = '';
    
    for (let i = 0; i < Math.min(lines.length, 20); i++) {
      const line = lines[i].trim();
      if (line && !line.startsWith('#') && !line.startsWith('!') && line.length > 30) {
        description = line;
        break;
      }
    }
    
    return description || `${repo} is a software project. [More detailed description needed]\n\n`;
  }

  extractHowContent(content) {
    // Look for installation and usage sections
    const installMatch = content.match(/(?:installation|install|getting started|quick start)[\s\S]*?(?=\n#{1,6}|$)/i);
    const usageMatch = content.match(/(?:usage|how to|examples)[\s\S]*?(?=\n#{1,6}|$)/i);
    
    let howContent = '';
    
    if (installMatch) {
      howContent += installMatch[0] + '\n\n';
    }
    
    if (usageMatch) {
      howContent += usageMatch[0] + '\n\n';
    }
    
    if (!howContent) {
      howContent = '[Installation and usage instructions need to be added]\n\n';
    }
    
    return howContent;
  }

  extractExtrasContent(content) {
    // Extract remaining content that doesn't fit in other sections
    return '[Additional content from original README, acknowledgments, contributing guidelines, etc.]\n\n';
  }

  async saveLintedReadme(owner, repo, lintedContent) {
    const dirPath = path.join(__dirname, '..', 'linted_readmes', owner, repo);
    const filePath = path.join(dirPath, 'README.md');
    
    await fs.ensureDir(dirPath);
    await fs.writeFile(filePath, lintedContent);
    
    return filePath;
  }
}

const linter = new ReadmeLinter();

// Main endpoint: GET /:owner/:repo/README.md
app.get('/:owner/:repo/README.md', async (req, res) => {
  const { owner, repo } = req.params;
  
  try {
    // Check if we already have a linted version
    const lintedPath = path.join(__dirname, '..', 'linted_readmes', owner, repo, 'README.md');
    
    if (await fs.pathExists(lintedPath)) {
      const lintedContent = await fs.readFile(lintedPath, 'utf8');
      res.type('text/markdown').send(lintedContent);
      return;
    }

    // Fetch original README from GitHub
    let originalContent;
    try {
      originalContent = await linter.fetchGithubReadme(owner, repo);
    } catch (error) {
      // If no README exists, create one from inference
      originalContent = `# ${repo}\n\n[No README found - this is an inferred README.lint template]`;
    }

    // Transform to README.lint format
    const lintedContent = linter.transformToReadmeLint(originalContent, owner, repo);

    // Save the linted version
    await linter.saveLintedReadme(owner, repo, lintedContent);

    res.type('text/markdown').send(lintedContent);

  } catch (error) {
    console.error('Error processing README:', error);
    res.status(500).json({ 
      error: 'Failed to process README',
      message: error.message 
    });
  }
});

// API endpoint for programmatic access
app.get('/api/lint', async (req, res) => {
  const { repo_url } = req.query;
  
  if (!repo_url) {
    return res.status(400).json({ error: 'repo_url parameter required' });
  }

  try {
    // Parse GitHub URL
    const match = repo_url.match(/github\.com\/([^/]+)\/([^/]+)(?:\/|$)/);
    if (!match) {
      return res.status(400).json({ error: 'Invalid GitHub URL format' });
    }

    const [, owner, repo] = match;
    const lintedUrl = `${req.protocol}://${req.get('host')}/${owner}/${repo}/README.md`;

    res.json({ 
      linted_url: lintedUrl,
      repo: `${owner}/${repo}`
    });

  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to process request',
      message: error.message 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'readme-lint-service' });
});

app.listen(PORT, () => {
  console.log(`README.lint service running on port ${PORT}`);
  console.log(`Try: http://localhost:${PORT}/cosmos/cosmos-sdk/README.md`);
});

module.exports = app;