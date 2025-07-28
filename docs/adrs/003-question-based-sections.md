# ADR-003: Question-Based Section Names

**Date Decided**: April 3, 2023  
**Date Recorded**: July 25, 2025 (reconstructed from git commit 5fc5194)  
**Status**: Accepted

## Plan
Transform abstract section names into specific questions that guide README authors toward useful content.

## Hypothesis
We believe README authors struggle with vague section names like "Why" and "What". We can help by providing specific prompts like "Why use ${REPO_NAME}?". We'll know we're right if the resulting content is more concrete and useful.

## Exploration
During pairing session with Susannah, we evolved from abstract headers to question-based prompts:

Original abstract format:
```
🌌 Why
🌌🌌 Who  
🌌🌌🌌 What
🌌🌌🌌🌌 How
```

## Learning
**Decision**: Use question-based section names with placeholders

**Final format**:
```
🌌 Why use ${REPO_NAME}?
🌌🌌 Who ${BENEFITS FROM THIS REPO}
🌌🌌🌌 What ${EXACTLY DOES THIS DO?}
🌌🌌🌌🌌 How ${DO I USE IT? HOW DOES IT WORK?}
🌌🌌🌌🌌🌌 Extras
```

**Rationale**:
- Specific questions are easier for authors to answer than abstract concepts
- Placeholders like `${REPO_NAME}` make it clear what should be customized
- Questions prompt authors to think from the reader's perspective
- More concrete than "Why" - guides toward explaining value proposition
- "How" encompasses both usage AND technical implementation

This makes the template more actionable and reduces ambiguity about what content belongs in each section.