const meanNumber = require("./calculateMean");

test("calculate the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = meanNumber(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput);
});
