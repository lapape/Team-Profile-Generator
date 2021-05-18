const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    //super calls the constructor of the parent class
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
