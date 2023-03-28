// 2500. Delete Greatest Value in Each Row

// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.

// Example 1:

// Input: grid = [[1,2,4],[3,3,1]]
// Output: 8
// Explanation: The diagram above shows the removed values in each step.
// - In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
// - In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
// - In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
// The final answer = 4 + 3 + 1 = 8.

var deleteGreatestValue = function (grid) {
  let output = 0;
  while (grid[0].length > 0) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
      let maxVal = Math.max(...grid[i]);
      if (maxVal > max) max = maxVal;
      grid[i].splice(grid[i].indexOf(maxVal), 1);
    }
    output += max;
  }
  return output;
};

console.log(
  deleteGreatestValue([
    [1, 2, 4],
    [3, 3, 1],
  ])
);

// 8
