// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// const runningSum = function (nums) {
//   let sum = 0;
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     result[i] = sum;
//   }
//   return result;
// };

const runningSum = function (nums) {
  let sum = 0;
  return nums.map((e) => (sum += e));
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10];
