// 1941. Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of
// occurrences (i.e., the same frequency).

var areOccurrencesEqual = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  return new Set(Object.values(obj)).size === 1;
};

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));
