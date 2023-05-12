// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache 2.o License") {
    retern`![Apache license](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.license)}


## Project Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
${renderLicenseLink(data.license)}
* [Contact Information](#contact information)

## Installation
To install the dependencies that are needed, run the command:
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contribution}

## Testing
To run tests, enter the following command:
${data.testing}

${renderLicenseSection(data.license)}
 ## Contact Information
 Find more of my work at (https://github.com/${
   data.github
 }/) or contact me directly at ${data.email}
`;
}

module.exports = generateMarkdown;
