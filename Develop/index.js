// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Project Title",
      message: "What is the title of your project? (Required)",
      validate: (projectTitleInput) => {
        if (projectTitleInput) {
          return true;
        } else {
          console.log("Please enter the title of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Project Description",
      message: "Please describe your project in detail.",
    },
    {
      type: "input",
      name: "Table of Contents",
      message: "Please enter your Table of Contents.",
    },
    {
      type: "input",
      name: "Installation",
      message: "Please describe the installation process.",
    },
    {
      type: "input",
      name: "License",
      message: "Please list any licenses used.",
    },
    {
      type: "input",
      name: "Contributors",
      message: "Please list any ourside contributors.",
    },
    {
      type: "input",
      name: "Tests",
      message: "Please describe any tests that have been run.",
    },
    {
      type: "input",
      name: "Questions",
      message: "Enter question section here.",
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
