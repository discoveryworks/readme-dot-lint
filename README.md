# README.lint

We believe that folks trying to understand / contribute to the Cosmos ecosystem
Have a harder time than they need to bc it can be hard to quickly grok a project
And we could address that at low cost by creating a template for Cosmos OSS projects to encourage consistency and completeness of product and technical vision, and to better socialize those goals.

## A Plan (v1)
### 1. survey a bunch of README structures. What are the common H2s?

e.g.

- Synopsis
- Quickstart
- Contributing
- License
- Contact info 
- Audience
- Vision/Mission/Purpose (Statement of Value)
- repo-specific h2s

### 2. Standardize a Statement of Value for each repo

A few short lines that address:

- WHAT is this? (what're we asserting as the Problem? What's the Solution? What positive change does this bring to the world?)

- WHY does it exist?
- WHAT is (was?) the problem?
- WHEN was this problem identified and solution proposed/implemented?
  - e.g. ..."once the IBC was adopted, then we had this problem..."
- HOW does this product solve the problem?
- WHO uses it?

- [ ] HMW do this in a ~one-liner. Does a Lean Hypothesis make sense as a standard?
      - We believe USER
      - has a problem with PROBLEM
      - and we can solve it with SOLUTION
      - and we'll know we're right if KPI_CHANGE


### 3. Propose a standard template
   - assert this as a standard
      - [ ] explain what the standard is and why it's useful: "convention over configuration"
   - [x] create an embedabble badge
   - link to ICF asking us to make it easier to onboard onto projects
### 4. Munge READMEs to conform to template
   1. ONLY add headers and reorder. No edits!
### 5. Submit PRs amending READMEs to conform to template

---

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


<<<<<<< HEAD


=======
---

# Munging existing README's

1. 🌌 Why do we need it?
2. 🌌 Who is it for?
3. 🌌 What exactly is it?
4. 🌌 How do I use it?
5. 🌌 Other intersting bits

## template / formatting
```
I. 🌌 Why
=============================


II. 🌌 Who
=============================


III. 🌌 What
=============================


IV. 🌌 How
=============================


V. 🌌 Other
=============================

````

v1
---

I. 🌌 Why
=============================


II. 🌌 Who
=============================


III. 🌌 What
=============================


IV. 🌌 How
=============================


V. 🌌 Other
=============================

v2
---
🌌 Why
=============================


🌌🌌 Who
=============================


🌌🌌🌌 What
=============================


🌌🌌🌌🌌 How
=============================


🌌🌌🌌🌌🌌 Other
=============================

v3
---
Why 🌌
=============================


Who 🌌🌌
=============================


What 🌌🌌🌌
=============================


How 🌌🌌🌌🌌
=============================


Other 🌌🌌🌌🌌🌌
=============================

---
```

- I like v2 best. It's visually distinctive, the ordering is pretty clear, but it feels a little less didactic than putting numerals in front
- I don't like the word "other", it feels too exclusionary and dismissive. It (literally!) "others" the repo-specific stuff that makes this repo a special snowflake that we love. Maybe call it "More"? or something a little more indicative of abundance?

---

## badges

### md
- ![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)
- ![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)

### html

<img alt="Conforms to README.lint" src="https://img.shields.io/badge/README.lint-conforming-brightgreen" />
<img alt="Does not conform to README.lint" src="https://img.shields.io/badge/README.lint-non--conforming-red" />

