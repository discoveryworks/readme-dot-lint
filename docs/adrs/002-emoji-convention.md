# ADR-002: Emoji Convention Strategy  

**Date Decided**: April 12, 2024  
**Date Recorded**: July 25, 2025 (reconstructed from git commit 3b9c136)  
**Status**: Accepted

## Plan
We need to establish a clear convention for emoji usage in README.lint that works beyond just the Cosmos ecosystem.

## Hypothesis
We believe projects need visual hierarchy markers that aren't ecosystem-specific. We can provide a sane default while allowing customization. We'll know we're right if adoption spreads beyond Cosmos.

## Exploration
Started with 🌌 (milky_way) but realized this is too cosmos-specific for a general standard. Explored various alternatives in scratchpad:

- 🌸 flowers (nice but maybe too decorative)
- 🌻 sunflowers (bright and optimistic but shiny) 
- 🌱🌿🌳🌴🌲 growth series (distracting, doesn't map well)
- 🧭 compass (boring but functional)
- ⛰🏕🏔🌋🗻 mountains (variety but weird progression)
- 🗽 liberty (strong symbolism, potential cultural issues)

## Experiment
Tested the idea: "what if each project picks their own emoji?"

## Learning
**Decision**: Convention over Configuration with project flexibility

**Key principles**:
1. **Default**: README.lint has a sane, semantically-neutral default emoji: 🌸 (cherry_blossom)
2. **Project Choice**: Projects can configure their own emoji if desired
3. **Consistency Rules**:
   - Stick with one emoji, don't mix-and-match  
   - Stay consistent with header hierarchy (H1 is Why, H2 is Who, etc.)
   - Number of emoji indicates section level (🌸, 🌸🌸, 🌸🌸🌸, etc.)

This addresses the cosmos-specificity problem while maintaining visual distinctiveness and allowing projects to customize to their taste.