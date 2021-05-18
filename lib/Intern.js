const Employee = require("./Employee");
class Intern extends Intern {
  constructor(name, id, email, school) {
    //super calls the constructor of the parent class
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
