const { expect, it } = require("@jest/globals");
const Manager = require("../lib/Manager");
describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and office number", () => {
      const manager = new Manager("Lacey", 1, "lapape@gmail.com", 123);
      expect(manager.name).toEqual("Lacey");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("lapape@gmail.com");
      expect(manager.officeNum).toEqual(123);
    });
  });
});
