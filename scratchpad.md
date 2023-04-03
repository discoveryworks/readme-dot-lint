## A Plan (v2)

## Strangelove projects for which we can lint README's

 https://github.com/search?q=user:strangelove-ventures&type=repositories

- https://github.com/strangelove-ventures/horcrux => https://raw.githubusercontent.com/strangelove-ventures/horcrux/main/README.md
- https://github.com/strangelove-ventures/lens => https://raw.githubusercontent.com/strangelove-ventures/lens/main/README.md
- https://github.com/strangelove-ventures/interchaintest => https://raw.githubusercontent.com/strangelove-ventures/interchaintest/main/README.md
- https://github.com/strangelove-ventures/graz => https://raw.githubusercontent.com/strangelove-ventures/graz/main/README.md
- https://github.com/strangelove-ventures/half-life => https://raw.githubusercontent.com/strangelove-ventures/half-life/main/README.md
- https://github.com/strangelove-ventures/packet-forward-middleware => https://raw.githubusercontent.com/strangelove-ventures/packet-forward-middleware/main/README.md
- https://github.com/strangelove-ventures/heighliner => https://raw.githubusercontent.com/strangelove-ventures/heighliner/main/README.md
- https://github.com/strangelove-ventures/cosmos-operator => https://raw.githubusercontent.com/strangelove-ventures/cosmos-operator/main/README.md
- https://github.com/strangelove-ventures/async-icq => https://raw.githubusercontent.com/strangelove-ventures/async-icq/main/README.md
- https://github.com/strangelove-ventures/lens-examples => https://raw.githubusercontent.com/strangelove-ventures/lens-examples/main/README.md
- https://github.com/strangelove-ventures/sommelier => https://raw.githubusercontent.com/strangelove-ventures/sommelier/main/README.md
- https://github.com/strangelove-ventures/noble => https://raw.githubusercontent.com/strangelove-ventures/noble/main/README.md
- https://github.com/strangelove-ventures/style-guide => https://raw.githubusercontent.com/strangelove-ventures/style-guide/main/README.md
- https://github.com/strangelove-ventures/cns => https://raw.githubusercontent.com/strangelove-ventures/cns/main/README.md
- https://github.com/strangelove-ventures/paramauthority => https://raw.githubusercontent.com/strangelove-ventures/paramauthority/main/README.md
- https://github.com/strangelove-ventures/graz-vite-example => https://raw.githubusercontent.com/strangelove-ventures/graz-vite-example/main/README.md
- 
https://raw.githubusercontent.com/strangelove-ventures/horcrux/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/lens/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/interchaintest/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/graz/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/half-life/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/packet-forward-middleware/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/heighliner/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/cosmos-operator/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/async-icq/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/lens-examples/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/sommelier/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/noble/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/style-guide/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/cns/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/paramauthority/main/README.md
https://raw.githubusercontent.com/strangelove-ventures/graz-vite-example/main/README.md
- 






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
      - [x] explain what the standard is and why it's useful: "convention over configuration"
   - [x] create an embedabble badge
   - link to ICF asking us to make it easier to onboard onto projects
### 4. Munge READMEs to conform to template
   1. ONLY add headers and reorder. No edits!

### 5. Submit PRs amending READMEs to conform to template

---

## Parking Lot

### the timeline
- every "WHEN" is standardized
- we pull it out and build a `.markwhen` file and publish the viz'n\
- here's a blog post on the history of Cosmos (2018) https://blog.cosmos.network/cosmos-history-inception-to-prelaunch-b05bcb6a4b2b
- do we submodule all the repos? there's probably some strong git-fu there


### problem: there's no canonical place to learn about the history of Cosmos

- what does a Viking Saga of Cosmos authorship tree look like?


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
