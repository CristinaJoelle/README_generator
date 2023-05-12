// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0 License") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  if (license === "Eclipse Public License 1.0") {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  }
  if (license === "The MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license === "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0 License") {
    return `\n* [License](https://opensource.org/licenses/Apache-2.0)\n`;
  }
  if (license === "Ecplipse Public License 1.0") {
    return `\n* [License](https://opensource.org/licenses/EPL-1.0)\n`;
  }
  if (license === "The MIT License") {
    return `\n* [License](https://opensource.org/licenses/MIT)\n`;
  }
  if (license === "Mozilla Public License 2.0") {
    return `\n* [License](https://opensource.org/licenses/MPL-2.0)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

This project is licensed under **${license}**.`;
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
* [Contributing](#contributing)
* [Testing](#testing)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Installation
To install the dependencies that are needed, run the command:

**${data.installation}**

## Usage
${data.usage}

## Contributing
${data.contribution}

## Testing
To run tests, enter the following command:

**${data.testing}**

${renderLicenseSection(data.license)}
 ## Questions
 Find more of my work at (https://github.com/${
   data.github
 }/) or contact me directly at ${data.email} with any questions.
`;
}

module.exports = generateMarkdown;
