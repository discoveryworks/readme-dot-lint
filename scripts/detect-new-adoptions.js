#!/usr/bin/env node
// ABOUTME: Detects new README.lint badge adoptions on GitHub by searching for badge usage.
// ABOUTME: Outputs list of repositories that have adopted README.lint badge.

const https = require('https');

/**
 * Search GitHub for repositories containing README.lint badge
 * Uses GitHub Code Search API
 */
async function searchGitHub(query, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/search/code?q=${encodeURIComponent(query)}&per_page=100`,
      method: 'GET',
      headers: {
        'User-Agent': 'README.lint-badge-detector',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API returned ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

/**
 * Fetch previous adoptions from a file or API
 */
async function getPreviousAdoptions() {
  // For now, return empty array
  // In the future, this could read from a JSON file or database
  return [];
}

/**
 * Save current adoptions for future comparison
 */
async function saveAdoptions(adoptions) {
  // Output as JSON to stdout so GitHub Actions can capture it
  console.log(JSON.stringify(adoptions, null, 2));
}

/**
 * Main detection logic
 */
async function detectNewAdoptions() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.error('Warning: GITHUB_TOKEN not set. API rate limits will be very restrictive.');
    console.error('Set GITHUB_TOKEN environment variable for authenticated requests.');
  }

  try {
    // Search for the README.lint badge in markdown files
    const query = 'README.lint-conforming in:file extension:md';

    console.error('Searching GitHub for README.lint badge adoptions...');
    const results = await searchGitHub(query, token);

    if (!results.items || results.items.length === 0) {
      console.error('No repositories found with README.lint badge.');
      await saveAdoptions([]);
      return;
    }

    // Extract unique repositories
    const repositories = new Map();

    for (const item of results.items) {
      const repoFullName = item.repository.full_name;
      const repoUrl = item.repository.html_url;
      const fileUrl = item.html_url;

      if (!repositories.has(repoFullName)) {
        repositories.set(repoFullName, {
          name: repoFullName,
          url: repoUrl,
          stars: item.repository.stargazers_count || 0,
          description: item.repository.description || '',
          badgeFiles: [item.path]
        });
      } else {
        // Add additional file path if repo already seen
        repositories.get(repoFullName).badgeFiles.push(item.path);
      }
    }

    // Convert to array and sort by stars (most popular first)
    const adoptions = Array.from(repositories.values())
      .sort((a, b) => b.stars - a.stars);

    // Get previous adoptions to detect new ones
    const previousAdoptions = await getPreviousAdoptions();
    const previousRepoNames = new Set(previousAdoptions.map(a => a.name));

    const newAdoptions = adoptions.filter(a => !previousRepoNames.has(a.name));

    console.error(`\nFound ${adoptions.length} total repositories with README.lint badge`);
    console.error(`New adoptions: ${newAdoptions.length}`);

    if (newAdoptions.length > 0) {
      console.error('\nNew Adoptions:');
      newAdoptions.forEach(repo => {
        console.error(`  - ${repo.name} (${repo.stars} stars)`);
        console.error(`    ${repo.url}`);
      });
    }

    // Output all adoptions as JSON
    await saveAdoptions({
      timestamp: new Date().toISOString(),
      total: adoptions.length,
      new: newAdoptions.length,
      repositories: adoptions
    });

  } catch (error) {
    console.error('Error detecting adoptions:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  detectNewAdoptions();
}

module.exports = { detectNewAdoptions, searchGitHub };
