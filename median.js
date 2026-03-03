function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  console.log(`Middle index: ${middleIndex}`);
  
  const median = list.splice(middleIndex, 1)[0];
  console.log(`Median: ${median}`);
  console.log(list)//splice remove the item, this is not safe because has mutate the array

  return median;
}


// console.log(calculateMedian([10, 20, 30, 40, 50]));
module.exports = calculateMedian;
