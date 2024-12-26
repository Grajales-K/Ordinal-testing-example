function getOrdinalNumber(num) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

// this line will work when we export the test to other file.
// const getOrdinalNumber = require("./getOrdinalNumber"); // Importa la función

test("convert numbers to ordinal numbers", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});


test("convert numbers to ordinal numbers", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(101)).toEqual("101st");
});



// ============================= function isEven ===============================


// function isEven(n) {
//   return n % 2 === 0;
// }

// test("is Even should return true for an even number", () => {
//   let result = isEven(4);
//   expect(result).toBe(true);
// });

// test("is Even should return true for an even number", () => {
//   let result = isEven(6

//   );
//   expect(result).toBe(true);
// });

// // module.exports = isEven;
// //example on how have to be the files in diferente file 


// // src/
// //   getOrdinalNumber.js
// //   isEven.js
// // tests/
// //   getOrdinalNumber.test.js
// //   isEven.test.js
// // Archivo: isEven.js
// // javascript
// // Copiar código
// // function isEven(n) {
// //     return n % 2 === 0;
// // }

// // function largestNumbers(num1, num2, num3) {
// //   let largest = num1;
// //   if (num2 > largest) largest = num2;
// //   if (num3 > largest) largest = num3;
// //   return largest;
// // }

// // function largestNumbers(num1, num2, num3) {
// //   return Math.max(num1, num2, num3);
// // }

// console.assert(
//   largestNumbers(5, 3, 7) === 7,
//   "largest number is third position"
// );
// console.assert(
//   largestNumbers(2, 9, 3) === 9,
//   "largest number in second position"
// );
// console.assert(
//   largestNumbers(1.3, 2.7, 3.1) === 3.1,
//   "largest number from decimal numbers"
// );
// console.assert(
//   largestNumbers(-3, -4, -5) === -3,
//   "largest number from decimal numbers"
// );

// // console.log(largestNumbers(5, 3, 7));