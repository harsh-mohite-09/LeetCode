// 2535. Difference Between Element Sum and Digit Sum of an Array

// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

const differenceOfSum = function (nums) {
  let elementSum = nums.reduce((s, a) => s + a);
  let digitSum = nums.reduce((acc, e) => {
    let sum = 0;
    while (e > 0) {
      sum += e % 10;
      e = Math.floor(e / 10);
    }
    return acc + sum;
  }, 0);

  return Math.abs(elementSum - digitSum);
};

const differenceOfSum2 = function (nums) {
  return nums.reduce((acc, item) => {
    if (item > 9) {
      let e = item;
      let sum = 0;
      while (e > 0) {
        sum += e % 10;
        e = Math.floor(e / 10);
      }
      acc += item - sum;
    }
    return acc;
  }, 0);
};

const differenceOfSum3 = function (nums) {
  let diff = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 9) {
      let curr = nums[i];
      let sum = 0;
      while (curr > 0) {
        sum += curr % 10;
        curr = Math.floor(curr / 10);
      }
      diff += nums[i] - sum;
    }
  }
  return diff;
};

console.log(differenceOfSum3([1, 15, 6, 3])); // |25 - 16| = 9;
