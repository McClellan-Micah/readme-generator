const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

//add questions about Installation, Usage, Test , Contributing
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please describe the installation instructions for your project",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// function call to initialize program
init();
