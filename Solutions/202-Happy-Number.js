// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Example 2:
// Input: n = 2
// Output: false

var isHappy = function (n) {
  while (1) {
    let s = 0;
    while (n > 0) {
      let d = n % 10;
      n = Math.floor(n / 10);
      s += d ** 2;
    }
    if (s === 1 || s === 7) return true;
    if (s < 10) break;
    n = s;
  }
  return false;
};

console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(1111111));
