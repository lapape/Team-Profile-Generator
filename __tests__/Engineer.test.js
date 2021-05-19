const { expect, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github", () => {
      const engineer = new Engineer("Lacey", 1, "lapape@gmail.com", "lapape");
      expect(engineer.name).toEqual("Lacey");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("lapape@gmail.com");
      expect(engineer.github).toEqual("lapape");
    });
  });
});
