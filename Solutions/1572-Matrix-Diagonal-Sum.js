// 1572. Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and
// all the elements on the secondary diagonal that are not part of the primary diagonal.

// Example 1:
// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

// Example 2:
// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8

// Example 3:
// Input: mat = [[5]]
// Output: 5

var diagonalSum = function (mat) {
  let s = 0;
  let l = 0;
  let r = mat.length - 1;
  while (l < mat.length) {
    if (l === r) s += mat[l][l];
    else {
      s += mat[l][l] + mat[l][r];
    }
    l++;
    r--;
  }
  return s;
};

var diagonalSum = function (mat) {
  let s = 0;
  for (let i = 0; i < mat.length; i++) {
    s += mat[i][i];
    if (i !== mat.length - 1 - i) {
      s += mat[i][mat.length - 1 - i];
    }
  }
  return s;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

console.log(diagonalSum([[5]]));
