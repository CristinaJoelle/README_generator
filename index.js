// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a description of your project.",
  },
  {
    type: "list",
    name: "installation",
    message: "Would you like to use npm i for installation?",
    choices: ["Yes", "No"],
  },
  {
    type: "input",
    name: "usage",
    message: "How is your project intended to be used?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How can a user contribute?",
  },
  {
    type: "input",
    name: "testing",
    message: "How can a user run tests?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license you would like to use?",
    choices: [
      "Apache 2.o License",
      "Eclipse License 1.0",
      "The MIT License",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
