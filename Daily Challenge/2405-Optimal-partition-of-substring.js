// 2405. Optimal Partition of String
// Medium

// Given a string s, partition the string into one or more substrings such that the characters
// in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.

// Example 1:

// Input: s = "abacaba"
// Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.

// Example 2:

// Input: s = "ssssss"
// Output: 6
// Explanation:
// The only valid partition is ("s","s","s","s","s","s").

var partitionString = function (s) {
  let output = 0;
  let currStr = "";
  for (let i = 0; i < s.length; i++) {
    let regex = new RegExp(s[i], "g");
    if (regex.test(currStr)) {
      currStr = s[i];
      output++;
      continue;
    }
    currStr += s[i];
  }
  return output + 1;
};

var partitionString = function (s) {
  let output = 0;
  let currStr = new Set();
  for (let i = 0; i < s.length; i++) {
    if (currStr.has(s[i])) {
      currStr.clear();
      output++;
    }
    currStr.add(s[i]);
  }
  return ++output;
};

console.log(partitionString("abacaba")); //4
console.log(partitionString("ssssss")); //6
console.log(partitionString("hdklqkcssgxlvehva")); //4
