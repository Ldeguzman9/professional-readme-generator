// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
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
    name: "githubRepo",
    message: "Please enter the name of your project repository.",
    validate: (githubRepo) => {
      if (githubRepo) {
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
    message: "Please list any outside contributors.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe any tests that have been run.",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you this project with? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
  {
    type: "input",
    name: "contact",
    message: "Please enter the best email to contact you.",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log(
          "README.md complete! Check out README.md to see the output!"
        )
  );
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
