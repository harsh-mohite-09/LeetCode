// 1827. Minimum Operations to Make the Array Increasing

// You are given an integer array nums (0-indexed). In one operation,
// you can choose an element of the array and increment it by 1.

// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.

// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1.
// An array of length 1 is trivially strictly increasing.

var minOperations = function (nums) {
  if (nums.length < 2) return 0;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const diff = nums[i - 1] - nums[i] + 1;
      nums[i] += diff;
      count += diff;
    }
  }
  return count;
};

console.log(minOperations([1, 1, 1])); // 3
console.log(minOperations([1, 5, 2, 4, 1])); // 14
console.log(minOperations([8])); // 0
