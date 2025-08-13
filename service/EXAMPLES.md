[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)

🌸 Why use these examples?
=============================

To demonstrate the README.lint service with real, popular open-source repositories and show how the transformation works across different project types.

🌸🌸 Who benefits from these examples?
=============================

- Developers evaluating the README.lint service
- Repository maintainers considering adopting the README.lint standard
- Contributors who want to understand the transformation quality

🌸🌸🌸 What examples are included?
=============================

## JavaScript/TypeScript Projects

### [React](http://localhost:3001/facebook/react/README.md)
- **Original**: https://github.com/facebook/react
- **Linted**: http://localhost:3001/facebook/react/README.md
- **Why notable**: Extremely popular frontend library with comprehensive docs

### [Node.js](http://localhost:3001/nodejs/node/README.md) 
- **Original**: https://github.com/nodejs/node
- **Linted**: http://localhost:3001/nodejs/node/README.md
- **Why notable**: Core JavaScript runtime with technical documentation

### [VS Code](http://localhost:3001/microsoft/vscode/README.md)
- **Original**: https://github.com/microsoft/vscode
- **Linted**: http://localhost:3001/microsoft/vscode/README.md
- **Why notable**: Popular editor with detailed setup instructions

## Blockchain/Cosmos Ecosystem

### [Cosmos SDK](http://localhost:3001/cosmos/cosmos-sdk/README.md)
- **Original**: https://github.com/cosmos/cosmos-sdk
- **Linted**: http://localhost:3001/cosmos/cosmos-sdk/README.md
- **Why notable**: Core blockchain framework, original inspiration for README.lint

## Python Projects

### [Django](http://localhost:3001/django/django/README.md)
- **Original**: https://github.com/django/django
- **Linted**: http://localhost:3001/django/django/README.md
- **Why notable**: Major web framework with established documentation patterns

### [Requests](http://localhost:3001/psf/requests/README.md)
- **Original**: https://github.com/psf/requests
- **Linted**: http://localhost:3001/psf/requests/README.md
- **Why notable**: Simple, elegant library with clear user-focused docs

## Go Projects

### [Kubernetes](http://localhost:3001/kubernetes/kubernetes/README.md)
- **Original**: https://github.com/kubernetes/kubernetes
- **Linted**: http://localhost:3001/kubernetes/kubernetes/README.md
- **Why notable**: Complex infrastructure project with developer onboarding focus

### [Docker](http://localhost:3001/moby/moby/README.md)
- **Original**: https://github.com/moby/moby
- **Linted**: http://localhost:3001/moby/moby/README.md
- **Why notable**: Container platform with technical but accessible documentation

## Already Conformant Examples

### [README.lint](http://localhost:3001/discoveryworks/readme-dot-lint/README.md)
- **Original**: https://github.com/discoveryworks/readme-dot-lint
- **Linted**: http://localhost:3001/discoveryworks/readme-dot-lint/README.md
- **Why notable**: Returns original content - demonstrates conformance detection

🌸🌸🌸🌸 How to use these examples?
=============================

## Testing the Service

1. Start the service: `npm start` (runs on port 3000) or `PORT=3001 npm start`
2. Visit any of the URLs above to see the linted version
3. Compare with the original GitHub README

## API Testing

```bash
# Get linted URL for any repo
curl "http://localhost:3001/api/lint?repo_url=https://github.com/facebook/react"

# Returns: {"linted_url":"http://localhost:3001/facebook/react/README.md","repo":"facebook/react"}
```

## Adding New Examples

The service works with any public GitHub repository:
- Format: `http://localhost:3001/{owner}/{repo}/README.md`
- API format: `/api/lint?repo_url=https://github.com/{owner}/{repo}`

## What to Look For

When evaluating linted examples, notice:
- **Conformant repos**: Return original content unchanged
- **Non-conformant repos**: Get transformed to README.lint structure
- **Missing content**: Gets placeholder prompts for "Why" and "Who" sections
- **Preserved content**: Installation, usage, and technical details moved to appropriate sections

🌸🌸🌸🌸🌸 Extras
=============================

## Caching Behavior

All linted READMEs are cached in `/linted_readmes/{owner}/{repo}/README.md` and committed to version control for:
- Fast subsequent requests
- Historical tracking of transformations
- Offline availability during development

## Performance Notes

- First request: Fetches from GitHub API and transforms
- Subsequent requests: Served from cached file
- No rate limiting currently implemented (YAGNI principle)

## Repository Selection Criteria

Examples chosen to represent:
- Different programming languages and ecosystems
- Varying documentation styles and complexity
- Mix of corporate and community-maintained projects
- Range from simple libraries to complex platforms