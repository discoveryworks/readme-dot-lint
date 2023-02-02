# README.lint

We believe that folks trying to understand / contribute to the Cosmos ecosystem
Have a harder time than they need to bc it can be hard to quickly grok a project
And we could address that at low cost by creating a template for Cosmos OSS projects to encourage consistency and completeness of product and technical vision, and to better socialize those goals.

## A Plan (v1)
1. survey a bunch of README structures. What are the common H2s?

e.g.

- Synopsis
- Quickstart
- Contributing
- License
- Contact info 
- Audience
- Vision/Mission/Purpose (Statement of Value)
- repo-specific h2s

1. Standardize a Statement of Value for each repo

A few short lines that address:

- WHAT is this? (what're we asserting as the Problem? What's the Solution? What positive change does this bring to the world?)

- WHY does it exist?
- WHAT is (was?) the problem?
- WHEN was this problem identified and solution proposed/implemented?
  - e.g. ..."once the IBC was adopted, then we had this problem..."
- HOW does this product solve the problem?
- WHO uses it?

1. Propose a standard template
   - assert this as a standard
      - explain what the standard is and why it's useful: "convention over configuration"
   - create a military badge
   - link to ICF asking us to do this
2. Submit PRs amending READMEs to conform to template


## Projects to compare and submit PRs for: https://interchain.io/technology

- https://github.com/cosmos/cosmos-sdk
- https://github.com/cosmos/gaia
- https://github.com/cosmos/ibc
- https://github.com/tendermint/tendermint
- High stars from https://github.com/orgs/cosmos/repositories?q=&type=all&language=&sort=stargazers
- https://github.com/cosmos/ibc-go
- https://github.com/cosmos/interchain-security
- https://github.com/cosmos/relayer
- https://github.com/cosmos/chain-registry
- https://github.com/cosmos/cosmos (white paper)
- https://github.com/cosmos/iavl
- https://github.com/cosmos/cosmos-rust
- https://github.com/cosmos/mainnet
- https://github.com/cosmos/sdk-tutorials
- https://github.com/evmos/ethermint
- https://github.com/cosmos/gravity-bridge
- https://github.com/cosmos/cosmjs
- More ideas on https://github.com/cosmos/awesome-cosmos


---

## Parking Lot

### the timeline
- every "WHEN" is standardized
- we pull it out and build a `.markwhen` file and publish the viz'n\
- here's a blog post on the history of Cosmos (2018) https://blog.cosmos.network/cosmos-history-inception-to-prelaunch-b05bcb6a4b2b
- do we submodule all the repos? there's probably some strong git-fu there


### problem: there's no canonical place to learn about the history of Cosmos

- what does a Viking Saga of Cosmos authorship tree look like?




