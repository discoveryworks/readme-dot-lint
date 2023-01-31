# Audit of READMEs

Let's take safari into what's out there rn.
- [] 1. survey a bunch of README structures. 
- [] 2. What are the common H2s?

## General thoughts
- rm'ing content and leaving only headers is a nice exercise. Does it still make sense? Tell a story? If the answer is "no", we're probably missing something.
- the README's are fairly well-architected, but they've got radically different ideas of who their audience is
  - eg IBC: Policy ppl
  - go-layer: for Devs
  - tendermint: archive of knowledge about a thing
  - IDEA: maybe we should have an Empty Folders translation/code_switch for each, ie each README include `For Devs: this is foo. For policy ppl: this is bar`
---

## Target List

- [x] https://github.com/cosmos/cosmos-sdk
- [x] https://github.com/cosmos/gaia
- [x] https://github.com/cosmos/ibc
- [x] https://github.com/tendermint/tendermint
- [x] https://github.com/cosmos/ibc-go
- [x] https://github.com/informalsystems/hermes
- [x] https://github.com/cosmos/interchain-security
- [x] https://github.com/cosmos/relayer
- [x] https://github.com/cosmos/chain-registry
- [x] https://github.com/cosmos/cosmos (white paper)
- [x] https://github.com/cosmos/iavl
- [x] https://github.com/cosmos/cosmos-rust
- [x] https://github.com/cosmos/mainnet
- [x] https://github.com/cosmos/sdk-tutorials
- [x] https://github.com/evmos/ethermint
- [x] https://github.com/cosmos/gravity-bridge
- [x] https://github.com/cosmos/cosmjs



---

## CosmosSDK
https://github.com/cosmos/cosmos-sdk/blob/main/README.md

```
## Quick Start
## Contributing
## Tools and Frameworks
### Cosmos Hub Mainnet
### Inter-Blockchain Communication (IBC)
### Ignite CLI
## Disambiguation
```
---

## Gaia
https://raw.githubusercontent.com/cosmos/gaia/main/README.md

```
### 🤔 — Why should you be interested in the Cosmos Hub
### ⚡ — Documentation & Introduction
### 👤 — Node Operators
### 🗣️ — Validators
### 👥 — Delegators
### 👥 — Testnet
### 🌐 — Roadmap
### 🗄️ — Archives & Genesis
### 🤝 — How to contribute
### 💬 — Talk to us
### 👏 — Supporters
```

---


## IBC
https://github.com/cosmos/ibc/blob/main/README.md

- 1st take: this is hot garbage. It's just an index...of what?
- 2nd take: it's not code (why's it in a repo?). So I guess it makes sense that it doesn't look like code repos.

- hypothesis: at the begining of Cosmos Time, engineers used the tools they're comfy with (git, gh) to store everything, even planning docs. Now that the community is bigger, that non-code conversation has migrated elsewhere, and the semantics of having this in gh are a little bit of a head-fake.
  - [ ] idea: put this into a more explicit "not code" repo format, eg [ADR](https://github.com/adr/madr) or the like. Do something like https://github.com/adr/madr/tree/main/docs/decisions


```
## Synopsis
## What is IBC?
## Interchain Standards
### Meta
### Core
### Client
### Relayer
### App
## Translations

```

## Tendermint
[aoeu](https://raw.githubusercontent.com/tendermint/tendermint/main/README.md)

```
## Documentation
## Releases
## Security
## Minimum requirements
### Install
### Quick Start
## Contributing
## Versioning
### Semantic Versioning
### Upgrades
### Supported Versions
## Resources
### Libraries
### Applications
### Research
## Join us!
```
---

## IBC Go

https://raw.githubusercontent.com/cosmos/ibc-go/main/README.md



```
## Roadmap
## Releases
## Ecosystem
## Support
## Contributing
## Request for maintainership
## Security
## Audits
## Quick Navigation
## Documentation and Resources

```


## Hermes IBC relayer
```
# Hermes IBC relayer
## Requirements
## Hermes Guide
## Contributing
## Versioning
## Resources
## License
```

## Interchain security


```
# Interchain Security
## Instructions
## Testing
## Learn more
```

## Go Relayer

https://github.com/cosmos/relayer/blob/main/README.md

```
## Table Of Contents
## Basic Usage - Relaying Packets Across Chains
## Security Notice
## Code of Conduct


```

## Chain Registry

https://github.com/cosmos/chain-registry

```

# Chain Registry

## Npm Modules
## Rust Crates
## Web Endpoints
## APIs
## Web Interfaces
## Contributing
# chain.json
## Sample
# Assetlists
## IBC Data

```

## Cosmos Whitepaper

https://github.com/cosmos/cosmos

```
## ToC
### Disambiguation

```

---

## IAVL

https://github.com/cosmos/iavl

```
# IAVL+ Tree 
```

---

## Cosmos-rust

https://github.com/cosmos/cosmos-rust

```
# Cosmos Rust
## Crates
## Merge Policy
## Branch etiquette
## Building Proto files from source
## Minimum Supported Rust Version

```

## Cosmos Mainnet

https://github.com/cosmos/mainnet

```

# Cosmos Hub Mainnet

## Overview
## Scheduled Upgrade 🗓️ 
### Upgrading using Cosmovisor
#### 1. Autodownload
#### 2. Manual
## Quickstart
# Prepare genesis file for cosmoshub-4
# Configure State sync
# Prepare genesis file for cosmoshub-4
## Upgrade to Validator Node

```

## SDK Tutorials

https://github.com/cosmos/sdk-tutorials

```
No headers! Just a big mess of YAML. Maybe this was generated by something? [Vuepress](https://vuepress.vuejs.org/)! 

```

## Ethermint

https://github.com/evmos/ethermint

```

## Installation
## Quick Start
## Community
## Contributing
## Careers

```

## Gravity Bridge

https://github.com/cosmos/gravity-bridge

```

## Status
## The design of Gravity Bridge
## Key design Components
## Operational parameters ensuring security
## Run Gravity bridge right now using docker
# Developer guide
## Solidity Contract
## Cosmos Module
### Go unit tests
### To hand test your changes quickly
### Explanation:
### Tips for IDEs:
### Working inside the container
## Debugger

```

## CosmJS

https://github.com/cosmos/cosmjs


```

## Documentation

### API documentation


### Using custom Stargate modules

## Packages

### Modularity
### Supported JS environments

## Webpack Configs
## Roadmap
## Known limitations
### 0.26
### 0.25
### 0.24
## Get in touch
## Development

```









