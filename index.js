const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const managerQuestions = [
  {
    type: "input",
    message: "What is your team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your team manager's employee ID?",
    name: "ID",
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
    name: "ID",
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
    name: "ID",
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
