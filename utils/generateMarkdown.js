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

* [Installation Instructions](#installation)

* [Usage Information](#usage)
${addLicenseAnchor(data.license)}
* [Contribution Guidelines](#contribution)

* [Test Instructions](#tests)

* [Questions](#questions)

## Installation Instructions

The following installation command should be run prior to executing the project: 

\`\`\`
${data.installation}
\`\`\`

## Usage Information

${data.usage}

## Usage

${data.usage}

${addLicenseInfo(data.license)}
  
## Contribution Guidelines

${data.contributing}

## Tests

The following command should be used to run any tests:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the project, please email me at ${data.email}. You may also access my repository at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
