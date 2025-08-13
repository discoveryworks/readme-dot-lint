Idea: active readme.lint ("autolint"?)

Scenario: readme exists and has enough context to express the "why" and "who"
  When I construct a URL a la "https://readme-dot-lint.com/${GITHUB_REPO_URL}/README.md"
  Then I should see a linted version of that readme
  And that linted version should be checked into version control at ${readme-dot-lint repo}/linted_readmes/${GITHUB_REPO_URL}/README.md

Scenario: readme exists and does not have enough context to express the "why" and "who"
  When I construct a URL a la "https://readme-dot-lint.com/${GITHUB_REPO_URL}/README.md"
  Then I should see a linted version of that readme
  And the "why" and "who" should be written as explicit calls to action, posing the question "Why did ${ORIGINAL_COMMITER} go to the trouble of writing this?" and "Who did ${ORIGINAL_COMMITER} write it for?"

Scenario: no readme exists
  When I construct a URL a la "https://readme-dot-lint.com/${GITHUB_REPO_URL}/README.md"
  Then we should infer the answers in readme.lint format
  Then I should see a linted version of that readme

Scenario: this is available via API
  When someone sends a GET request w/ a `${GITHUB_REPO_URL}/README.md` payload
  Then autolint should run
  And the request should return the URL `https://readme-dot-lint.com/${GITHUB_REPO_URL}/README.md`

---

Questions:
- ought this be part of readme-dot-lint repo, or something separate and namespaced ("autolint"?) Ought we separate the spec from working software?
- is "autolint" the best name for this?
- is there a name for the `cooked.wiki` pattern?
- we can test using localhost, but this necessarily needs a URL to work. What're some good URLs or TLDs that semantically say "I linted this"? `readme-dot-lint.wiki`? `readme.info`?