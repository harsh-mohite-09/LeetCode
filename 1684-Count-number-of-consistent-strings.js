// 1684. Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

var countConsistentStrings = (allowed, words) => {
  return words.filter((word) =>
    word.split("").every((e) => allowed.includes(e))
  ).length;
};

var countConsistentStrings = (allowed, words) => {
  let count = 0;
  let re = new RegExp(`^[${allowed}]+$`);
  for (let i = 0; i < words.length; i++) {
    if (re.test(words[i])) count++;
  }
  return count;
};

console.log(
  countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab", "abbabba"])
);
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
