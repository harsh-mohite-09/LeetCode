// 1221. Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// const balancedStringSplit = function (s) {
//   let count = 0;
//   let obj = {};
//   for (let i = 0; i < s.length; i++) {
//     obj[s[i]] = ++obj[s[i]] || 1;
//     if (obj["L"] === obj["R"]) {
//       count++;
//       obj = {};
//     }
//   }
//   return count;
// };

const balancedStringSplit = function (s) {
  let count = 0;
  let obj = { pair: 0 };
  for (let i = 0; i < s.length; i++) {
    obj.pair += s[i] === "R" ? 1 : -1;
    if (obj.pair === 0) count++;
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("RRRRLLLL"));
console.log(balancedStringSplit("RLRLRLRLRL"));
console.log(balancedStringSplit("RLL"));
