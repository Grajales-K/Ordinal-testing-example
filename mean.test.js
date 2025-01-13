const calculateMean = require("./mean");

test("calculate the mean of a list of numbers", () => {
  const list = [3, 50, 7]; //entry data
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput);
});
