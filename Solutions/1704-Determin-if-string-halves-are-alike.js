// 1704. Determine if String Halves Are Alike

// You are given a string s of even length. Split this string into two halves of equal lengths,
// and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

var halvesAreAlike = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = 0;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (vowels.has(s[i])) left++;
    if (vowels.has(s[j])) right++;
    i++;
    j--;
  }
  return left === right;
};

var halvesAreAlike = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let equal = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.has(s[i])) equal++;
    if (vowels.has(s[s.length - i - 1])) equal--;
  }
  return !equal;
};

console.log(halvesAreAlike("book")); // true
console.log(halvesAreAlike("textbook")); // false
