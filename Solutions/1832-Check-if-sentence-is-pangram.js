// 1832. Check if the Sentence Is Pangram

// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

var checkIfPangram = function (sentence) {
  return new Set([...sentence]).size === 26;
};

var checkIfPangram = function (sentence) {
  let myObj = {};
  for (let i = 0; i < sentence.length; i++) {
    myObj[sentence[i]] ?? (myObj[sentence[i]] = true);
  }
  return Object.keys(myObj).length === 26;
};

var checkIfPangram = function (sentence) {
  let mySet = new Set();
  for (let i = 0; i < sentence.length; i++) {
    mySet.add(sentence[i]);
  }
  return mySet.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
