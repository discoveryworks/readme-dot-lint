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

## Configuration

Copy `.env.example` to `.env` and configure as needed:

```bash
cp .env.example .env
```

Environment variables:
- `PORT`: Server port (default: 3515)
- `GITHUB_TOKEN`: Optional GitHub personal access token to increase API rate limits from 60/hr to 5000/hr. Get yours at https://github.com/settings/tokens (no scopes needed for public repos)
- `BASE_URL`: Base URL for the service, used in API responses (default: http://localhost:3515)

## Running the service

```bash
npm start
```

## Usage

### Direct URL access
Visit: `http://localhost:3515/{owner}/{repo}/README.md`

Example: `http://localhost:3515/cosmos/cosmos-sdk/README.md`

### API access
GET `/api/lint?repo_url=https://github.com/owner/repo`

Returns: `{ "linted_url": "http://localhost:3515/owner/repo/README.md" }`

🌸🌸🌸🌸🌸 Extras
=============================

## Deployment

### Deploying to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from the repository root:
   ```bash
   vercel
   ```

3. Configure environment variables in Vercel dashboard:
   - `GITHUB_TOKEN`: Your GitHub personal access token
   - `BASE_URL`: Your deployed Vercel URL (e.g., https://your-project.vercel.app)

4. Deploy to production:
   ```bash
   vercel --prod
   ```

The `vercel.json` configuration file handles routing and build settings automatically.

### Other Deployment Options

The service can be deployed to any Node.js hosting platform:
- Railway: `railway up`
- Fly.io: `flyctl deploy`
- Heroku: Standard Node.js buildpack
- Any VPS with Node.js

Just ensure environment variables are configured in your hosting platform.

## Architecture

The service consists of:
- Express.js web server
- GitHub API integration for fetching READMEs
- README.lint transformation engine
- File system storage for caching linted versions

## File Structure

- **Runtime cache**: `/cache/{owner}/{repo}/README.md` (gitignored, regenerated on demand)
- **Showcase fixtures**: `/service/test/fixtures/{owner}/{repo}/original.md` (tracked, curated examples)

The fixtures directory serves as the manifest of showcase examples for the service.