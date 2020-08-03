// functions to create license info and badge
function addLicenseAnchor(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function addLicenseInfo(license) {
  if (license !== "None") {
    return (
      `## License

This project was developed under the ${license} license.`
    )
  }
  return ''
}

function addLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${addLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${addLicenseAnchor(data.license)}
* [Contribution](#contribution)

* [Tests](#tests)

* [Questions](#questions)

## Installation

The following installation command should be run prior to executing the project: 

\`\`\`
${data.installation}
\`\`\`

## Usage

The following usage instructions should be considered for this project:

${data.usage}

${addLicenseInfo(data.license)}
  
## Contribution

The following contribution guidelines should be considered for this project:

${data.contribution}

## Tests

The following command should be used to run any tests:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the project, please email me at ${data.email}. You may also access my GitHub repository here: [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
