const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('will insert a "," every 3 spaces', () => {
    expect(addCommas(1234)).toEqual('1,234')
  })
  test('will', () => {
    expect(addCommas(1234)).toEqual('1,234')
  })
});
