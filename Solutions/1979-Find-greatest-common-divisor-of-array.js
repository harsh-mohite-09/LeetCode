// 1979. Find Greatest Common Divisor of Array

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Loop Solution with mod

var findGCD = function (nums) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }
  while (min !== 0) {
    let temp = min;
    min = max % min;
    max = temp;
    console.log(min, "loop");
  }
  return max;
};

var findGCD = function (nums) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }
  while (min !== max) {
    if (min > max) {
      min -= max;
    } else {
      max -= min;
    }
  }
  return min;
};

// Recursive Solution

var findGCD = (nums) => gcd(Math.min(...nums), Math.max(...nums));
var gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

console.log(findGCD([2, 5, 6, 9, 10]));
console.log(findGCD([7, 5, 6, 8, 3]));
console.log(findGCD([3, 3]));
