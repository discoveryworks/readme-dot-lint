# README.lint

[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/strangelove-ventures/readme-dot-lint)



🌌 Why
=============================
- We believe that folks trying to understand / contribute to the Cosmos ecosystem
- Have a harder time than they need to bc it can be hard to quickly grok a project
- And we could address that at low cost by creating a template for Cosmos OSS projects to encourage consistency and completeness of product and technical vision, and to better socialize those goals.


🌌🌌 Who
=============================


🌌🌌🌌 What
=============================

In the spirit of [Convention Over Configuration](https://en.wikipedia.org/wiki/Convention_over_configuration), README.lint is a sane default template for a readme. The hope is that users will be able to more easily ramp up on new repos if they know what to expect in the documentation—and that the template can incline authors towards making explicit a core set of concerns, namely:
- "Why did we see the need to spend time and energy building this?", 
- "Who is this repo for?", 
- "What, exactly, is this thing?"
- "How do I set it up? How do I use it?", and
- Anything else that doesn't fit into the above categories.

🌌🌌🌌🌌 How
=============================

1. Audit existing repos and, without changing anything other than position, organizing the repos into following sections:

```
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

```
2. submitting PRs to those repos
3. ...one day, maybe try upgrade this into an actual automated linter. For now, humans do the work.

🌌🌌🌌🌌🌌 Other
=============================
## Badges

In order to 1) spread the word, and 2) imply that this exercise is on par with other efforts to ensure consistancy and standards across software, we made a badge!


[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/strangelove-ventures/readme-dot-lint)
[![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)](https://github.com/strangelove-ventures/readme-dot-lint)

### Markdown
```
Conforming:
   
   [![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/strangelove-ventures/readme-dot-lint)

Non-Conforming:
   
   [![Does not conform to README.lint](https://img.shields.io/badge/README.lint-non--conforming-red)](https://github.com/strangelove-ventures/readme-dot-lint)
```

### Html
```
Conforming:

  <a href="https://github.com/strangelove-ventures/readme-dot-lint">
    <img alt="Conforms to README.lint" src="https://img.shields.io/badge/README.lint-conforming-brightgreen" />
  </a>

Non-Conforming:

  <a href="https://github.com/strangelove-ventures/readme-dot-lint">
    <img alt="Does not conform to README.lint" src="https://img.shields.io/badge/README.lint-non--conforming-red" />
  </a>

```