const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateMarkdown = require("./generateMarkdown.js");
const teamMembers = [];

const managerQuestions = [
  {
    type: "input",
    message: "What is your team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your team manager's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your team manager's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your team manager's office number?",
    name: "office",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "github",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's employee ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school name?",
    name: "school",
  },
];

const addQuestions = [
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "add",
    choices: ["Engineer", "Intern", "Done adding employees"],
  },
];

function writeToFile(fileName, data) {
  //path - join method
  fs.writeFile(path.join(__dirname + "/dist", fileName), data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(managerQuestions).then((data) => {
    //figure out how to take those responses from the user and write them to a file
    const manager = new Manager(data.name, data.id, data.email, data.office);
    teamMembers.push(manager);
    askAdd();
  });
}

function askAdd() {
  inquirer.prompt(addQuestions).then((data) => {
    if (data.add === "Engineer") {
      askEngineer();
    } else if (data.add === "Intern") {
      askIntern();
    } else {
      console.log(teamMembers);
      writeToFile("index.html", generateMarkdown(teamMembers));
    }
  });
}
function askEngineer() {
  inquirer.prompt(engineerQuestions).then((data) => {
    //figure out how to take those responses from the user and write them to a file
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamMembers.push(engineer);
    askAdd();
  });
}
function askIntern() {
  inquirer.prompt(internQuestions).then((data) => {
    //figure out how to take those responses from the user and write them to a file
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamMembers.push(intern);
    askAdd();
  });
}

// Function call to initialize app
init();
