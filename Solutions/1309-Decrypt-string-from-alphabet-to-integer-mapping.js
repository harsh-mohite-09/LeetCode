// 1309. Decrypt String from Alphabet to Integer Mapping
// Easy
// 1.3K
// 96
// Companies
// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

// Example 1:

// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

// Input: s = "1326#"
// Output: "acz"

var freqAlphabets = function (s) {
  let output = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      output += String.fromCharCode(+(s[i] + s[i + 1]) + 96);
      i += 2;
    } else {
      output += String.fromCharCode(+s[i] + 96);
    }
  }
  return output;
};

var freqAlphabets = function (s) {
  return s
    .match(/(\d{2}#|\d)/g)
    .map((num) => String.fromCharCode(parseInt(num) + 96))
    .join("");
};

var freqAlphabets = function (s) {
  return s
    .match(/(\d{2}#|\d)/g)
    .reduce((acc, num) => acc + String.fromCharCode(parseInt(num) + 96), "");
};

console.log(freqAlphabets("10#11#12")); // 'jkab'
console.log(freqAlphabets("1326#")); // 'acz'
