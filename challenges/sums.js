/*

Three number sum

write a function that takes a non-empty array of distinct integers and an int representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a 2-dimensional array of these triplets. The numbers in each triple should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

Sample input = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0

Sample output = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/

const threeSum = (arr, target) => {
  let minusOne = arr.map(elt => elt - target);
  console.log(minusOne);
  
}

let arr1 = [12, 3, 1, 2, -6, 5, -8, 6];
console.log(threeSum(arr1, 4))
