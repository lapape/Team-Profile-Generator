const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //super calls the constructor of the parent class
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;
