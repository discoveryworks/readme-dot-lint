[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)

🌸 Why use readme-lint-service?
=============================

Because manually linting READMEs to the README.lint standard is tedious, and automation makes it scalable across the entire ecosystem.

🌸🌸 Who benefits from readme-lint-service?
=============================

- Developers who want to quickly see what a README would look like in README.lint format
- Repository maintainers who want to adopt the README.lint standard
- Tools and services that need programmatic access to linted READMEs

🌸🌸🌸 What does readme-lint-service do?
=============================

readme-lint-service is a web service that automatically transforms GitHub repository READMEs into the README.lint format. It fetches READMEs from GitHub, applies the README.lint template structure, and serves the linted version at predictable URLs.

🌸🌸🌸🌸 How do I use readme-lint-service?
=============================

## Installation

```bash
cd service
npm install
```

## Running the service

```bash
npm start
```

## Usage

### Direct URL access
Visit: `http://localhost:3000/{owner}/{repo}/README.md`

Example: `http://localhost:3000/cosmos/cosmos-sdk/README.md`

### API access
GET `/api/lint?repo_url=https://github.com/owner/repo`

Returns: `{ "linted_url": "http://localhost:3000/owner/repo/README.md" }`

🌸🌸🌸🌸🌸 Extras
=============================

## Architecture

The service consists of:
- Express.js web server
- GitHub API integration for fetching READMEs
- README.lint transformation engine
- File system storage for caching linted versions

## File Structure

Linted READMEs are stored in the repository under:
`/linted_readmes/{owner}/{repo}/README.md`

These files are checked into version control for persistence and caching.