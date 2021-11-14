const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const renderLicenseBadge = require("./generateMarkdown");
// fs.writeFile(
//   `READMEGEN.md`,
//   `
//     # ${answers.project}
//     ![Github license] ${answers.license}
//     ## Description
//     ${answers.description}
//     ## Table of Contents
//     - ${answers.installation}
//     - ${answers.usage}
//     - ${answers.license}
//     - ${answers.contributing}
//     - ${answers.tests}
//     - ${answers.questions}
// `
// );

const questions = [
  {
    name: "name",
    type: "input",
    message: "What is your Github name?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
  {
    name: "project",
    type: "input",
    message: "What is your project's name?",
  },
  {
    name: "description",
    type: "input",
    message: "Please write a short description of your project",
  },
  {
    name: "license",
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    name: "installation",
    type: "input",
    message: "What command should be run to install dependencies",
    default: "npm i",
  },
  {
    name: "tests",
    type: "input",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    name: "usage",
    type: "input",
    message: "What does the user need to know about using the repo?",
  },
  {
    name: "contributing",
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
  },
];

function writeFile(fileName, answers) {
  fs.writeFile(fileName, answers, (err) => {
    if (err) throw err;
    console.log("Generating README...");
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    renderLicenseBadge(answers.license);
    writeFile("READMEGEN.md", generateMarkdown(answers));
  });
}

init();
