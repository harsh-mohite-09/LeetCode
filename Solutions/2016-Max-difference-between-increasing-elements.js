// 2016. Maximum Difference Between Increasing Elements

// Given a 0-indexed integer array nums of size n,
// find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]),
// such that 0 <= i < j < n and nums[i] < nums[j].

// Return the maximum difference. If no such i and j exists, return -1.

var maximumDifference = function (nums) {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = Math.abs(nums[i] - nums[j]);
      if (diff > max && nums[i] < nums[j]) max = diff;
    }
  }
  return max;
};

var maximumDifference = function (nums) {
  let min = nums[0];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i] - min);
  }
  return max || -1;
};

console.log(maximumDifference([7, 1, 5, 4])); // 4
console.log(maximumDifference([9, 4, 3, 2])); // -1
console.log(maximumDifference([1, 5, 2, 10])); // 9
