// DOM Elements
const repoUrlInput = document.getElementById('repo-url');
const lintButton = document.getElementById('lint-button');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const resultEl = document.getElementById('result');
const lintedUrlEl = document.getElementById('linted-url');
const lintedContentEl = document.getElementById('linted-content');
const copyUrlButton = document.getElementById('copy-url-button');
const copyMarkdownButton = document.getElementById('copy-markdown-button');
const exampleLinks = document.querySelectorAll('.example-link');

// State
let currentLintedUrl = '';
let currentLintedContent = '';

// Event Listeners
lintButton.addEventListener('click', handleLintRequest);
repoUrlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleLintRequest();
    }
});

exampleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = e.target.dataset.url;
        repoUrlInput.value = url;
        handleLintRequest();
    });
});

copyUrlButton.addEventListener('click', () => {
    copyToClipboard(currentLintedUrl, 'URL copied to clipboard!');
});

copyMarkdownButton.addEventListener('click', () => {
    copyToClipboard(currentLintedContent, 'Markdown copied to clipboard!');
});

// Main function to handle lint requests
async function handleLintRequest() {
    const repoUrl = repoUrlInput.value.trim();

    if (!repoUrl) {
        showError('Please enter a GitHub repository URL');
        return;
    }

    // Validate GitHub URL format
    if (!isValidGithubUrl(repoUrl)) {
        showError('Please enter a valid GitHub repository URL (e.g., https://github.com/owner/repo)');
        return;
    }

    // Hide previous results and errors
    hideElement(errorEl);
    hideElement(resultEl);
    showElement(loadingEl);

    try {
        // Call the API endpoint
        const response = await fetch(`/api/lint?repo_url=${encodeURIComponent(repoUrl)}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to lint README');
        }

        const data = await response.json();
        currentLintedUrl = data.linted_url;

        // Fetch the actual linted content
        const contentResponse = await fetch(currentLintedUrl);

        if (!contentResponse.ok) {
            throw new Error('Failed to fetch linted content');
        }

        currentLintedContent = await contentResponse.text();

        // Display results
        displayResults();

    } catch (error) {
        showError(error.message || 'An error occurred while linting the README');
    } finally {
        hideElement(loadingEl);
    }
}

// Display the linted results
function displayResults() {
    lintedUrlEl.textContent = currentLintedUrl;
    lintedContentEl.textContent = currentLintedContent;
    showElement(resultEl);
}

// Show error message
function showError(message) {
    errorEl.textContent = message;
    showElement(errorEl);
}

// Utility: Validate GitHub URL
function isValidGithubUrl(url) {
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname !== 'github.com') {
            return false;
        }

        // Match github.com/owner/repo pattern
        const pathMatch = urlObj.pathname.match(/^\/([^\/]+)\/([^\/]+)/);
        return pathMatch !== null;
    } catch (e) {
        return false;
    }
}

// Utility: Copy to clipboard
async function copyToClipboard(text, successMessage) {
    try {
        await navigator.clipboard.writeText(text);
        showTemporaryMessage(successMessage);
    } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            showTemporaryMessage(successMessage);
        } catch (err) {
            showError('Failed to copy to clipboard');
        }

        document.body.removeChild(textArea);
    }
}

// Utility: Show temporary success message
function showTemporaryMessage(message) {
    const messageEl = document.createElement('div');
    messageEl.className = 'toast-message';
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 2000);
}

// Utility: Show element
function showElement(element) {
    element.classList.remove('hidden');
}

// Utility: Hide element
function hideElement(element) {
    element.classList.add('hidden');
}

// Add CSS animations for toast messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
