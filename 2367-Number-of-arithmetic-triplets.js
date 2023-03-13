// 2367. Number of Arithmetic Triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff.
//A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.

// Example 2:

// Input: nums = [4,5,6,7,8,9], diff = 2
// Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.

// Brute Force -> O(n^3)

// 1. Use 3 for loops to iterate over the array and match the condition

// var arithmeticTriplets = function (nums, diff) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

// Optimized to O(n^2)

// 1. Start from the end of the array.
// 2. Use 2 for loops.
// 3. Check if the inner loop has outer[i] - diff && outer[i] - 2*diff
// 4. If true then increment count.

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  let flag = [0, 0];
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = nums.length - 2; j >= 0; j--) {
      if (nums[i] - diff === nums[j]) flag[0] = 1;
      if (nums[i] - 2 * diff === nums[j]) flag[1] = 1;
    }
    if (flag[0] && flag[1]) count++;
    flag = [0, 0];
  }
  return count;
};

// Optimized to O(n) - HashMap

// 1. Use Set data structure to solve this, since every element is a unique value
// 2. Convert the nums array into a set with new Set(nums);
// 3. Iterate through the array in reverse and
//    check if the prev numbers (curr - diff & curr - 2*diff) are present or not.
// 4. If present increment the count.

///////////// BEST /////////////////////////////////////////////////////////////

var arithmeticTriplets = function (nums, diff) {
  let count = 0;
  let mySet = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i] - diff) && mySet.has(nums[i] - 2 * diff)) count++;
  }
  return count;
};

////////////////////////////////////////////////////////////////////////////////

// var arithmeticTriplets = function (nums, diff) {
//   const set = new Set();
//   return nums.reduce((acc, num) => {
//     set.add(num);
//     return set.has(num - diff) && set.has(num - 2 * diff) ? ++acc : acc;
//   }, 0);
// };

// var arithmeticTriplets = function (nums, diff) {
//   let count = 0;
//   let mySet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     mySet.add(nums[i]);
//     if (mySet.has(nums[i] - diff) && mySet.has(nums[i] - 2 * diff)) count++;
//   }
//   return count;
// };

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2
