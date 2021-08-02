/* Write java Program to Find Smallest and Largest Element in an Array.
Note: Number can not be repeated in the array.
Sample: [1,2,3,4,5,6] */


function minAndMax(arr) {
  arr = arr.sort((a,b) => a-b);
  //console.log(arr);
  
  let min = arr[0];
  let max = arr[arr.length-1];
  
  return [min, max];
}

/*
Test cases:

console.log(minAndMax([1,2,3,4,5,6]));
console.log(minAndMax([7,5,6,1,4,2]));
console.log(minAndMax([5,3,1,2]));
console.log(minAndMax([3,-3,17,-8,14,-1,0,5]));
console.log(minAndMax([]));
console.log(minAndMax([7]));
*/
