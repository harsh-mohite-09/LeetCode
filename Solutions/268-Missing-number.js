// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  let arr = new Array(nums.length + 1).fill(null).map((_, i) => i);
  let mySet = new Set(nums);
  for (let i = 0; i < arr.length; i++) {
    if (!mySet.has(arr[i])) return arr[i];
  }
};

var missingNumber = function (nums) {
  return (nums.length * (nums.length + 1)) / 2 - nums.reduce((s, a) => s + a);
};

var missingNumber = function (nums) {
  return (nums.length * (nums.length + 1)) / 2 - nums.reduce((s, a) => s + a);
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
