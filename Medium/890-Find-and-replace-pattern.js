// 890. Find and Replace Pattern

// Companies - Apple

// Given a list of strings words and a string pattern, return a list of words[i] that match pattern.
// You may return the answer in any order.

// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x
// in the pattern with p(x), we get the desired word.

// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter,
// and no two letters map to the same letter.

// Example 1:

// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

// var findAndReplacePattern = function (words, pattern) {
//   const flatPattern = getGeneralPattern(pattern);
//   const matchingWords = [];
//   for (const word of words) {
//     if (flatPattern === getGeneralPattern(word)) matchingWords.push(word);
//   }
//   return matchingWords;
// };

// var findAndReplacePattern = function (words, pattern) {
//   const flatPattern = getGeneralPattern(pattern);
//   return words.filter((word) => flatPattern === getGeneralPattern(word));
// };

// const getGeneralPattern = (str) => {
//   const hash = {};
//   let s = "";
//   let num = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (!hash[str[i]]) {
//       hash[str[i]] = num++;
//     }
//     s += hash[str[i]] + " ";
//   }
//   return s;
// };

var findAndReplacePattern = function (words, pattern) {
  var patt = getGeneralPattern(pattern); // 010
  return words.filter((e) => getGeneralPattern(e) == patt);
};

const getGeneralPattern = function (str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.indexOf(str[i]);
  }
  return result;
};

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
);
console.log(findAndReplacePattern(["a", "b", "c"], "a"));

console.log(
  findAndReplacePattern(["abcdefghijklab", "abcdefghijkabl"], "abcdefghijklab")
); // ["abcdefghijklab"]
