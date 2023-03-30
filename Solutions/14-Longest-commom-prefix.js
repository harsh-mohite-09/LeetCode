// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let output = "";
  let minLength = Math.min(...strs.map((e) => e.length));
  for (let i = 0; i < minLength; i++) {
    let commonArr = [];
    for (let j = 0; j < strs.length; j++) {
      commonArr.push(strs[j][i]);
      if (j > 0 && commonArr[j - 1] !== strs[j][i]) return output;
    }
    output += commonArr[0];
  }
  return output;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["cir", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));
