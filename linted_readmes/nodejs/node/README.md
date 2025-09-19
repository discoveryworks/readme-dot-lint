[![Conforms to README.lint](https://img.shields.io/badge/README.lint-conforming-brightgreen)](https://github.com/discoveryworks/readme-dot-lint)

🌸 Why use node?
=============================

*Why did nodejs go to the trouble of writing this?*

[This section needs to be filled in by the repository maintainers]

🌸🌸 Who benefits from node?
=============================

*Who did nodejs write this for?*

[This section needs to be filled in by the repository maintainers]

🌸🌸🌸 What does node do?
=============================

Node.js is an open-source, cross-platform JavaScript runtime environment.

🌸🌸🌸🌸 How do I use node?
=============================

installers, and source tarballs are available at
<https://nodejs.org/en/download/>.


how to do that.

Then, you can verify the files you've downloaded locally
(if you're using your default keyring, pass `--keyring="${GNUPGHOME:-~/.gnupg}/pubring.kbx"`):

```bash
curl -fsO "https://nodejs.org/dist/${VERSION}/SHASUMS256.txt.asc" \
&& gpgv --keyring="/path/to/nodejs-keyring.kbx" --output SHASUMS256.txt < SHASUMS256.txt.asc \
&& shasum --check SHASUMS256.txt --ignore-missing
```


🌸🌸🌸🌸🌸 Extras
=============================

[Additional content from original README, acknowledgments, contributing guidelines, etc.]

