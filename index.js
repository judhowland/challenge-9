const fs = require("fs");
const path = require("path");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description of your project"
      },
      { 
        type: "input",
        name: "installation",
        message: "What command is required to install your project dependencies?",
        default: "npm install"
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide usage instructions for use of this project:",
      },
      {
        type: "list",
        name: "license",
        message: "Which license does your project have or should have?",
        choices: ["MIT", "BSD", "Apache", "GPL", "ISC", "Public", "Unknown", "None"],
      },
      {
        type: "input",
        name: "contribution",
        message: "What are the guidelines for other developer contribution to this project?",
      },
      {
        type: "input",
        name: "test",
        message: "Please provide the command needed to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      }
      
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((questionResponses) => {
        writeToFile("README.md", generateMarkdown({...questionResponses}));
    console.log("README.md file is being created")
    })
}

// function call to initialize program
init();
