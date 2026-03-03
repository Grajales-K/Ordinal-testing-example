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

const list2 = [10, 20, 30];
const copy2 = [...list]; // the three dots create a new array with the same elements as list

copy.push(60, 70);

console.log(list2); // [10, 20, 30]  <-- ¡it's the same!
console.log(copy2); // [10, 20, 30, 60, 70]
