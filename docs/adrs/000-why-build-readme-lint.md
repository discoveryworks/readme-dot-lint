# ADR-000: Why Build README.lint

**Date Decided**: January 25, 2023  
**Date Recorded**: July 25, 2025 (reconstructed from scratchpad, git history, and blog post)
**Status**: Accepted

## Plan
Flatten a steep learning curve (e.g., ramping up on the many critical codebases in the Cosmos ecosystem) by applying Convention Over Configuration to readmes.

## Hypothesis  
We believe new folks trying to understand/contribute to the Cosmos ecosystem
have a harder time than they need to because it can be hard to quickly grok all the codebases
We can address this at low cost by minimizing trivial variance (e.g., standardize the format of a README)
We'll know we're right if onboarding becomes measurably easier.

## Exploration
**The Problem**: The Interchain's decentralized nature creates a complex onboarding challenge. Unlike typical ecosystems with a handful of repos, newcomers must navigate:
- CometBFT
- CosmosSDK  
- IBC
- Relayers (Go or Rust/Hermes)
- Chain Registry
- IBC-apps modules
- Problem-specific tooling (interchaintest, ignite, spawn)
- ...and more

**The Traditional Solution**: "Let's make the docs better" sounds great, but it's fundamentally an unfunded mandate - essentially "let's hire a librarian." While potentially worthwhile, this doesn't scale and creates maintenance burden.

**Our Insight**: What if we applied the code principle of [Convention Over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration) to READMEs themselves?

## Experiment
1. Surveyed dozens of important Cosmos ecosystem repos
2. Used `ack \# */README.md` to extract all README headers  
3. Card-sorted them to identify emergent common patterns
4. Consolidated terms (e.g. "Getting Started" + "Quick Start")
5. Mapped to simple WHO-WHAT-WHERE-WHY-WHEN-HOW taxonomy

## Learning
**Decision**: Build README.lint as a standardized template

**Key Insights**:
- The vast majority of README headers map to fundamental questions (Why/Who/What/How)
- Convention > Configuration reduces cognitive load for both readers and writers
- Same information, consistent format = easier pattern recognition
- Borrowing Larry Wall's "Laziness is a virtue" - work smarter, not harder

**Design Goals**:
- **Small**: Minimal violence to existing READMEs - less to change, less to review
- **Sneaky**: Forces authors to think through fundamental questions they may have avoided ("Sure, *you* know why this repo exists...but did you write it down?")  
- **Sustainable**: If conformant README drifts from standard? No big deal, nothing breaks. When the non-conformance becomes sufficiently painful, someone contributes a patch.

**Expected Outcome**: Onboarding to Cosmos still means reviewing tons of READMEs, but they're consistent in format, making them more digestible and predictable.

This is not about better docs - it's about *predictable* docs that reduce cognitive overhead during ecosystem exploration.