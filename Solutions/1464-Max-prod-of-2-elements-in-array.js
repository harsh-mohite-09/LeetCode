// 1464. Maximum Product of Two Elements in an Array
// Easy
// 1.5K
// 180
// Companies
// Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example 1:
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0),
//  you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// Example 2:
// Input: nums = [1,5,4,5]
// Output: 16
// Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Example 3:
// Input: nums = [3,7]
// Output: 12

var maxProduct = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let p = (nums[i] - 1) * (nums[j] - 1);
      if (p > max) max = p;
    }
  }
  return max;
};

var maxProduct = function (nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};

var maxProduct = function (nums) {
  let max1 = 0;
  let max2 = 0;
  for (let num of nums) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }
  return (max1 - 1) * (max2 - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([2, 3, 4, 5]));
console.log(maxProduct([2, 1, 4, 3, 5]));
console.log(maxProduct([5, 4, 3, 2, 1]));
// console.log(maxProduct([1, 5, 4, 5]));
// console.log(maxProduct([3, 7]));
