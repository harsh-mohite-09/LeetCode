// 1588. Sum of All Odd Length Subarrays

// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

// A subarray is a contiguous subsequence of the array.

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// My solution

// 1. First loop with iterator incrementing in odd numbers
// 2. Second loop should run for the amount of sub arrays
// 3. We get the required subarrays in each loop. Add their sum to total.

var sumOddLengthSubarrays = function (arr) {
  let total = 0;
  let n = arr.length;
  for (let i = 1; i <= n; i = i + 2) {
    for (let j = 0, k = i; j < n - i + 1; j++, k++) {
      total += arr.slice(j, k).reduce((s, a) => s + a);
    }
  }
  return total;
};

// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
console.log(sumOddLengthSubarrays([10, 11, 12]));
