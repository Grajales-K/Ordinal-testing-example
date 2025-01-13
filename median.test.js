const calculateMedian = require("./mean");

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 40, 50];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});
