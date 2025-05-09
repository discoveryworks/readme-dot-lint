# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

README.lint is a standardized template for README files, focused on improving the discoverability and comprehension of repositories, initially for use in the Cosmos blockchain ecosystem. The project aims to bring consistency to how repositories describe their purpose, audience, functionality, and usage instructions through a structured format.

## Repository Structure

- **Root**: Contains the main README.md and documentation for the README.lint standard
- **scratchpad**: Ephemeral workspace to
  1. drive out what the README.lint standard should be, and
  2. begin to put it out in the world

## Common Commands

### Linting README Files

To analyze a README file according to the README.lint standard, you would typically check if it follows the recommended structure:

```
🌌 Why use ${REPO_NAME}?
=============================

🌌🌌 Who ${BENEFITS FROM THIS REPO}
=============================

🌌🌌🌌 What ${EXACTLY DOES THIS DO?}
=============================

🌌🌌🌌🌌 How ${DO I USE IT? HOW DOES IT WORK?}
=============================

🌌🌌🌌🌌🌌 Extras
=============================
```

### Working with Repository READMEs

```bash
# Pull in a README file from a remote repository using sparse checkout
git remote add [remote-name] [repository-url]
git sparse-checkout set "README.md" "docs/*.md"

# Scrape README files from multiple repositories
./scrape.sh
```

## High-Level Architecture

README.lint operates as a convention-over-configuration standard rather than a technical tool. The main components are:

1. **The Standard**: A template format for organizing README information into Why, Who, What, How, and Extras sections
2. **Badge System**: Visual indicators for repositories that conform to the standard
3. **Repository Analysis**: Collection and evaluation of README files from various repositories
4. **Implementation Process**: Guidelines for implementing README.lint in new repositories

The core philosophy is making repositories more accessible by encouraging authors to explicitly address:
- Why the project exists
- Who the intended audience is
- What the project actually does
- How to use the project
- Any additional relevant information

While README.lint started with a space theme (🌌), the standard remains flexible about emoji choice as long as consistency is maintained within a repository.