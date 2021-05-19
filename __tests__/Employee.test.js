const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, an id, and an email", () => {
      const employee = new Employee("Lacey", 1, "lapape@gmail.com");
      expect(employee.name).toEqual("Lacey");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("lapape@gmail.com");
    });
  });
});
