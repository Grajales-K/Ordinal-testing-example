// reference arrays in the example below: we are creating a new name
// for this array but it is not a copy, it is a reference to the
// same array in memory, so when we push new values to the
// copy, it also changes the original list because they
// both point to the same array in memory.

const list = [10, 20, 30];
const copy = list;
copy.push(60, 70);

console.log(list);
console.log(copy);

// but if we want to create a copy of the array, we can use the spread
// operator (...) to create a new array with the same elements.
// This way, when we push new values to the copy, it does not
// affect the original list because they are different arrays in memory.

// and this is called immutability, when we want to create a new
//  array with the same elements but we don't want to change the
//  original array, we can use the spread operator to create a
//  new array that is a copy of the original array. This way, we
//  can modify the new array without affecting the original array.
const list2 = [10, 20, 30];
const copy2 = [...list]; // the three dots create a new array with the same elements as list

copy.push(60, 70);

console.log(list2); // [10, 20, 30]  <-- ¡it's the same!
console.log(copy2); // [10, 20, 30, 60, 70]

console.log("\n-------Value vs reference-------\n");


// Arrays are passed by REFERENCE.
// When you pass an array to a function, you are giving it the 'address' 
// of the original data. Methods like .push() or .splice() mutate 
// the original object in memory, even if it's declared with 'const'.

// When we pass an array as an argument to a function,
// we are passing a reference to the array in memory.
// This means that if we modify the array inside the function,
// it will also modify the original array outside the function
// because they both point to the same array in memory.

function pluralise(arr) {
  arr.push("s");
}
const lettersInAnArray = ["c", "a", "t"];
pluralise(lettersInAnArray);

console.assert(lettersInAnArray.length === 4); //if it's true. the console it's clean
console.assert(lettersInAnArray[3] === "s"); // will print failed if condition is false


console.log("\n-------Value vs reference with strings-------\n");

// Strings are PRIMITIVE and IMMUTABLE.
// When you pass a string to a function, you are passing a COPY of the value.
// Any modification inside the function (like str += "s") creates a 
// new string in memory and doesn't affect the original one outside.

// However, when we pass a string as an argument to a function,
// we are passing a copy of the string value because strings
// are immutable in JavaScript. This means that if we modify the
// string inside the function, it will not affect the original
// string outside the function because they are different values 
// in memory.

function pluralise2(str) {
  str += "s";
}
const string = "cat";
pluralise2(string);

console.assert(string.length === 3);
console.assert(string === "cat");
