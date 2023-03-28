// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// Time - O(N^2)

// const numIdenticalPairs = function (nums) {
//   let pair = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) pair++;
//     }
//   }
//   return pair;
// };

// Time - O(N)

const numIdenticalPairs = function (nums) {
  let obj = {};
  let pair = 0;
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      pair += obj[nums[i]];
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return pair;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); //4
