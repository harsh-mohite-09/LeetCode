// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// const smallerNumbersThanCurrent = function (nums) {
//   let output = [];
//   for (let i = 0; i < nums.length; i++) {
//     output[i] = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] > nums[j]) {
//         output[i] += 1;
//       }
//     }
//   }
//   return output;
// };

// ANother approach

// Algorithm =>

// input: [8, 1, 2, 2, 3]

// declare a new array with the input array sorted in ascending order
// +++ The elements's index shows the amount of numbers that are smaller.+++
// sorted: [1, 2, 2, 3, 8]

// iterate through sorted array and set the number and its index to a Map (skip any that already exist in the Map)
// map: { 1 => 0, 2 => 1, 3 => 3, 8 => 4 }

// iterate through the original input and create a new array with the current number's value from the Map
// output: [4, 0, 1, 1, 3]

const smallerNumbersThanCurrent = function (nums) {
  let hash = new Map();
  let sorted = nums.slice().sort((a, b) => a - b);
  sorted.forEach((number, idx) =>
    hash.has(number) ? null : hash.set(number, idx)
  );
  return nums.map((x) => hash.get(x));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
