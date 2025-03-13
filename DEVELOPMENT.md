# Development Notes

## Git Sparse Checkout

This repository has been set up to use Git's sparse checkout feature to manage and lint README files from multiple repositories. This technique allows us to:

1. Maintain a central location for README linting and standardization
2. Pull in only the README files from other repositories we want to lint/standardize
3. Manage multiple repositories' README files without cloning entire codebases

### How it Works

The sparse checkout was configured with multiple remotes:
- `origin`: The main readme-dot-lint repository
- Additional remotes: Other repositories whose README files we want to lint (e.g., cosmos-operator)

To use this technique:
```bash
# Add a new remote repository
git remote add [remote-name] [repository-url]

# Configure sparse checkout
git sparse-checkout set [paths-to-include]

# Example:
# git sparse-checkout set "README.md" "docs/*.md"
```

Note: This documentation is preserved here while the repository is currently returned to normal (non-sparse) checkout mode for regular development.