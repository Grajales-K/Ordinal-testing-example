function meanNumber(list) {

  let totalSum = 0;

  for (let i = 0; i < list.length; i++) {
   totalSum += list[i];

  }
  return totalSum / list.length;
}

module.exports = meanNumber;


// i is the counter taking each position on the Array
// list[i] the brackets means find in the array what is in the position i
// totalSum += list[i] when we use this is looking into 
// each position of i and returning the value of that position
