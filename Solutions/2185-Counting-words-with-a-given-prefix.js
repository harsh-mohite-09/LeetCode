// 2185. Counting Words With a Given Prefix

// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (pref === words[i].slice(0, pref.length)) count++;
  }
  return count;
};

var prefixCount = (words, pref) =>
  words.filter((e) => e.startsWith(pref)).length;

var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (checkPref(words[i], pref)) count++;
  }
  return count;
};

const checkPref = (word, pref) => {
  for (let i = 0; i < pref.length; i++) {
    if (pref[i] !== word[i]) return false;
  }
  return true;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code"));
