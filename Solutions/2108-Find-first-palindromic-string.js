// 2108. Find First Palindromic String in the Array

// Given an array of strings words, return the first palindromic string in the array.
// If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// var firstPalindrome = function (words) {
//   return words.find((word) => word === word.split("").reverse().join("")) ?? "";
// };

var firstPalindrome = function (words) {
  for (const word of words) {
    const n = word.length;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      if (word[left] !== word[right]) {
        break;
      }
      left++;
      right--;
    }
    if (left >= right) return word;
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));
