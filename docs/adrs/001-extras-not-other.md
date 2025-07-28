# ADR-001: Use "Extras" instead of "Other"

**Date Decided**: April 3, 2023  
**Date Recorded**: July 25, 2025 (reconstructed from git commit 5fc5194)  
**Status**: Accepted

## Plan
We need to choose the final section name for miscellaneous content that doesn't fit into Why/Who/What/How categories.

## Hypothesis
We believe README authors need a catch-all section for repo-specific content. We can help with a welcoming name instead of dismissive language. We'll know we're right if the template feels more natural to adopt.

## Exploration
During our pairing session, we discussed the section naming:

> "I don't like the word 'other', it feels too exclusionary and dismissive. It (literally!) 'others' the repo-specific stuff that makes this repo a special snowflake that we love. Maybe call it 'More'? or something a little more indicative of abundance?"

## Learning
**Decision**: Use "Extras" instead of "Other"

**Rationale**: 
- "Other" feels exclusionary and dismissive to the unique aspects of each repo
- "Extras" suggests abundance and additional value rather than dismissal  
- Makes backporting existing repos into README.lint format feel more welcoming
- Respects the repo-specific content that makes each project special

The section will be:
```
🌌🌌🌌🌌🌌 Extras
=============================
```

This can be a place for anything that doesn't fit into the {Why, Who, What, How} categories, making it easier to adapt existing READMEs.