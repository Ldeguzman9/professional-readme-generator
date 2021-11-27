// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (title) => {
        if (title) {
          return true;
        } else {
          console.log("Please enter the title of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project in detail.",
    },
    {
      type: "input",
      name: "installation",
      message: "Please describe the installation process.",
    },
    {
      type: "input",
      name: "license",
      message: "Please list any licenses used.",
    },
    {
      type: "input",
      name: "contributors",
      message: "Please list any ourside contributors.",
    },
    {
      type: "input",
      name: "tests",
      message: "Please describe any tests that have been run.",
    },
    {
      type: "input",
      name: "questions",
      message: "Enter question section here.",
    },
  ]);
};

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw new Error(err);

    console.log("README complete! Check out README.md to see the output!");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const data = generateMarkdown(answers);
    console.log(answers);
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
