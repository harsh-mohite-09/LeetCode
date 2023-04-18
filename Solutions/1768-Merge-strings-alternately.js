// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function (word1, word2) {
  let output = "";
  const n = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < n; i++) {
    output += (word1[i] || "") + (word2[i] || "");
  }
  return output;
};

var mergeAlternately = function (word1, word2) {
  let output = "";
  const n = word1.length > word2.length ? word1.length : word2.length;
  for (let i = 0; i < n; i++) {
    if (i < word1.length) output += word1[i];
    if (i < word2.length) output += word2[i];
  }
  return output;
};

var mergeAlternately = function (word1, word2) {
  let output = "";
  let i = 0;
  while (output.length < word1.length + word2.length) {
    output += (word1[i] || "") + (word2[i] || "");
    i++;
  }
  return output;
};

console.log(mergeAlternately("abc", "pqr")); //"apbqcr"
console.log(mergeAlternately("ab", "pqrs")); //"apbqrs"
console.log(mergeAlternately("abcd", "pq")); //"apbqcd"
