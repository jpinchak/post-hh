/* create a function that rotates a square matrix 90 degrees

[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

will become 

[[1, 4, 7],
[2, 5, 8],
[3, 6, 9]]

*/

const rotateMatrix = nestedArr => {
  let output = [];
  for(let i = 0; i < nestedArr.length; i++) {
    output.push([]);
  }
  for(let i = 0; i < nestedArr.length; i++) {
    for(let j = 0; j < nestedArr.length; j++) {
      output[j].push(nestedArr[i][j]);
    }
  }
  return output;
}

console.log(rotateMatrix([[1, 2, 3],  [4, 5, 6],  [7, 8, 9]]));


/*
Bonus: do this for rectangular matrix
*/