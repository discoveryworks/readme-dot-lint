# README.lint

[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/strangelove-ventures/readme-dot-lint)



🌌 Why use README.lint?
=============================
- *We believe that new folks* trying to understand / contribute to the Cosmos ecosystem
- *Have a harder time than they need to* because it can be hard to quickly grok a project
- *And we could address that at low cost by* creating a template for Cosmos OSS projects **to encourage consistency and completeness of product and technical vision**, and to better socialize those goals.


🌌🌌 Who benefits from it?
=============================

README.lint is for anyone reading a bunch of README's, trying to wrap their head around interrelated repos.

It can also help repo authors talk through and memorialize big questions like "Why use it?" and "Who is this for?" (which are often unambiguous in the beginning, but can get fuzzy as a project evolves).

🌌🌌🌌 What does it do?
=============================

In the spirit of [Convention Over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration), **README.lint is a sane default template for a readme**. The hope is that users will be able to more easily ramp up on new repos if they know what to expect in the documentation—and that the template can incline authors towards making explicit a core set of concerns, namely:
- "Why did we see the need to spend time and energy building this?",
- "Who is this repo for?",
- "What, exactly, is this thing?"
- "How do I set it up? How do I use it?", and
- Anything else that doesn't fit into the above categories.

🌌🌌🌌🌌 How do I use it?
=============================

Audit existing repos and, without changing anything other than position, organizing the repos into following sections:

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
🌌🌌🌌🌌🌌 Extras
=============================

## What's `Extras` for?
This can be a place for anything that doesn't fit into the {Why, Who, What, How} categories. The idea is to make it really easy to backport existing repos into README.lint, so "Extras" makes for easier adaptation.

---

## Emoji in README.lint

We use Emoji to help our visually-oriented mammal brains distinguish the canonical `README.lint` sections. We started out with `:milky_way`, but README.lint ought not be cosmos-specific and so `🌌` is a probably a poor choice; let's migrate to `🌸` (`:cherry_blossom`).

In thinking about it, the key principles seem to be:

- by Convention, README.lint has a sane, semantically-neutral default emoji: 🌸
- but if a project wants to Configure the emoji to it's own taste, the "rules" are
   1. stick w/ one emoji, don't mix-n-match
   2. stay consistent w/ the headers (e.g. "H1" is `Why`, H2 must always be `Who...` etc.)


---

## Why do we use the `===` markdown syntax for h1s?
Most people use the markdown `#` syntax for H1s. By using the less common, visually more distinctive `===` syntax, we'll often have an easier time distinguishing the meta (README.lint H1s) from the main content (H1s from the imported repo.)

---

## Process for implementing README.lint in other repos
1. Submit PRs to any repos which we think would benefit and start a conversation with the authors
2. add the PR to the [list of README's which have been linted](#linted-readmes)
3. ...one day, maybe try upgrade this into an actual automated linter. For now, humans do the work.

---

## Badges
In order to 1) spread the word, and 2) imply that this exercise is on par with other efforts to ensure consistency and standards across software, we made a badge!


[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/strangelove-ventures/readme-dot-lint)
[![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)](https://github.com/strangelove-ventures/readme-dot-lint)

### Badge snippet (Markdown)
#### Conforming:
```
[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/strangelove-ventures/readme-dot-lint)
```

#### Non-Conforming:
```
[![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)](https://github.com/strangelove-ventures/readme-dot-lint)
```

### Badge snippet (HTML)
#### Conforming:
```
<a href="https://github.com/strangelove-ventures/readme-dot-lint">
  <img alt="Conforms to README.lint" src="https://img.shields.io/badge/README.lint-conforming-brightgreen" />
</a>
```
#### Non-Conforming:
```
<a href="https://github.com/strangelove-ventures/readme-dot-lint">
  <img alt="Does not conform to README.lint" src="https://img.shields.io/badge/README.lint-non--conforming-red" />
</a>

```

---

## List of Linted Readmes

- [Cosmos Operator](https://github.com/strangelove-ventures/cosmos-operator/pull/406)