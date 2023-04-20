// 2000. Reverse Prefix of Word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at
// the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive).
// The resulting string will be "dcbaefd".
// Return the resulting string.

// Better approach. Maintaining a prefix
var reversePrefix = function (word, ch) {
  const stack = [];
  for (let i = 0; i < word.length; i++) {
    stack.unshift(word[i]);
    if (word[i] === ch) {
      return stack.join("") + word.slice(i + 1);
    }
  }
  return word;
};

var reversePrefix = function (word, ch) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      return (
        word
          .slice(0, i + 1)
          .split("")
          .reverse()
          .join("") + word.slice(i + 1)
      );
    }
  }
  return word;
};

console.log(reversePrefix("abcdefd", "d")); //"dcbaefd"
console.log(reversePrefix("abcefd", "d")); //"dfecba"
console.log(reversePrefix("xyxzxe", "z")); // "zxyxxe"
console.log(reversePrefix("abcd", "z")); // "abcd"
console.log(reversePrefix("rzwuktxcjfpamlonbgyieqdvhs", "s")); // "shvdqeiygbnolmapfjcxtkuwzr"
