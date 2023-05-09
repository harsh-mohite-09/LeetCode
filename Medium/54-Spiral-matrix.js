// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function (matrix) {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  let spiral = [];

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      spiral.push(matrix[rowStart][i]);
    }
    rowStart++;
    for (let i = rowStart; i <= rowEnd; i++) {
      spiral.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        spiral.push(matrix[rowEnd][i]);
      }
      rowEnd--;
    }
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        spiral.push(matrix[i][colStart]);
      }
      colStart++;
    }
  }
  return spiral;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
