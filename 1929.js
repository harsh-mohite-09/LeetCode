// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000

// Solution -

const getConcatenation = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    nums[i + n] = nums[i];
  }
  return nums;
};

console.log(getConcatenation([1, 2, 3]));
