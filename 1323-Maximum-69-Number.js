// 1323. Maximum 69 Number

// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

var maximum69Number = function (num) {
  let myObj = {
    6: "9",
    9: "6",
  };
  let myNum = num
    .toString()
    .split("")
    .map(
      (e, i, arr) =>
        +[...arr.slice(0, i), myObj[e], ...arr.slice(i + 1)].join("")
    );
  return Math.max(...myNum, num);
};

var maximum69Number = function (num) {};

// console.log(maximum69Number(9669));
// console.log(maximum69Number(9996));
// console.log(maximum69Number(9999));
