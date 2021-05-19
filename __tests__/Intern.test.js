const { expect, it } = require("@jest/globals");
const Intern = require("../lib/Intern");
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school", () => {
      const intern = new Intern(
        "Lacey",
        1,
        "lapape@gmail.com",
        "Denver University"
      );
      expect(intern.name).toEqual("Lacey");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("lapape@gmail.com");
      expect(intern.school).toEqual("Denver University");
    });
  });
});
