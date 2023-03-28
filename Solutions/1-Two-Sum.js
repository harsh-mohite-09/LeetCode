// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// O(n^2) approach

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// O(n) approach using Object or Hashtable.

// 1. Check whether the difference of current iteration and target is present in the obj.
// 2. If yes, then return the value (index) of that property and current index.
// 3. If not, then create a property with the key as the element and the value as the index.

const twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] != undefined) {
      // Check if already exists
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i; // Creating new property
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
