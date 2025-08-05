# README.lint

[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)



🌌 Why did we write README.lint?
=============================

Because we think that standardizing README format can make onboarding easier.

Or, put as a lean hypothesis,

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
Because it's weird.

Fine, "less common". It helps to disambiguate the readme-dot-lint meta format (setext) from the readme's actual subject matter (often atx).

Most people use the markdown [ATX syntax](https://spec.commonmark.org/0.31.2/#atx-headings) for H1s.

```markdown
# Foo Bar Baz (atx)

ATX syntax uses a single octothorpe "#" for an h1, two "##" for an h2 etc.
```

By using the less common, visually more distinctive [setext syntax](https://spec.commonmark.org/0.31.2/#setext-headings),

```markdown
Foo Bar Baz (setext)
====================

Setext gives a heavy underline to h1s
by drawing equal signs "===="
underneath the headline text

It also allows h2s
------------------

using a lighter underline
drawn with hyphens "----"

```

we'll often have an easier time distinguishing the meta (README.lint H1s) from the main content (H1s from the imported repo.)

### But now we've got multiple `H1`s, which `markdownlint` dislikes.
That sounds like a `markdownlint` problem, not an "us" problem. Multiple H1s have been valid since HTML5 was introduced in 2014. Get with the times, man.

---

## Process for implementing README.lint in other repos
1. Submit PRs to any repos which we think would benefit and start a conversation with the authors
2. add the PR to the [list of README's which have been linted](#linted-readmes)
3. ...one day, maybe try upgrade this into an actual automated linter. For now, humans do the work.

---

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

---

## Badges
In order to 1) spread the word, and 2) imply that this exercise is on par with other efforts to ensure consistency and standards across software, we made a badge!


[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)
[![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)](https://github.com/discoveryworks/readme-dot-lint)

### Badge snippet (Markdown)
#### Conforming:
```
[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)
```

#### Non-Conforming:
```
[![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)](https://github.com/discoveryworks/readme-dot-lint)
```

### Badge snippet (HTML)
#### Conforming:
```
<a href="https://github.com/discoveryworks/readme-dot-lint">
  <img alt="Conforms to README.lint" src="https://img.shields.io/badge/README.lint-conforming-brightgreen" />
</a>
```
#### Non-Conforming:
```
<a href="https://github.com/discoveryworks/readme-dot-lint">
  <img alt="Does not conform to README.lint" src="https://img.shields.io/badge/README.lint-non--conforming-red" />
</a>

```

---

## List of Linted Readmes

- [Cosmos Operator](https://github.com/strangelove-ventures/cosmos-operator/pull/406)
- [Horcrux](https://github.com/strangelove-ventures/horcrux/pull/268)

---

## Is anything sneaky happening here?

Yes!

Based on our research (and anecdata, and common sense), most READMEs do a decent job of covering the "**What**" and the "**How**".

It's _far_ less common for READMEs to mention the "**Who**" or the "**Why**"...yet every project, necessarily, must be _for_ someone(s).  Necessarily, there _must_ be a reason why a community is spending {time, energy, resources} on it.

These are 1) critically important, 2) often go unspoken, and 3) we believe lot of open source project or community conflict would be ameliorated if the "_Who_" and "_Why_" were made more explicit. But for whatever reason, we tend not to think to write this stuff down.

So, the sneakiness: by explicitly drawing "**Why?**" and "**Who?**" into the README.lint format, we hope to drive out these conversations, surface conflicts and ambiguities (e.g. among core teams or committers), and memorialize evolutions to that thinking.

You're welcome! :-)


---

## Acknowledgements

README.lint was originally developed at [Strangelove Ventures](https://github.com/strangelove-ventures) as part of our effort to improve developer experience across the Cosmos ecosystem. Special thanks to:

- **Strangelove Ventures** for supporting this work and allowing it to be open-sourced
- **[Sean](https://github.com/beckettsean)** for a ton of the ideas and practice and validation that led to building this thing
- **[Susannah](https://github.com/womensrights)** for pairing sessions that shaped key design decisions (especially the question-based section names)
- **The Cosmos community** for providing the ecosystem complexity that inspired this solution