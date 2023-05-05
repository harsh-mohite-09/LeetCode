// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k,
// return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// Brute force O(n^2)
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let max = 0;
  for (let i = 0; i <= s.length - k; i++) {
    let curr = 0;
    for (let j = i; j < k + i; j++) {
      if (vowels.has(s[j])) curr++;
    }
    if (curr > max) max = curr;
  }
  return max;
};

// Passed but too slow! O(n)

var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let max = 0;
  let count = 0;
  let queue = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;

    if (queue.length < k) {
      queue.push(s[i]);
    } else {
      if (vowels.has(queue.shift())) count--;
      queue.push(s[i]);
    }

    if (count > max) max = count;
  }
  return max;
};

// Sliding Window solution Time - O(n) Space - O(1)

var maxVowels = function (s, k) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (check(s[i])) count++;
  }
  max = count;
  for (let i = k; i < s.length; i++) {
    if (check(s[i])) count++;
    if (check(s[i - k])) count--;
    if (count > max) max = count;
  }

  return max;
};

function check(s) {
  return s == "a" || s == "e" || s == "i" || s == "o" || s == "u";
}

console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("weallloveyou", 7)); //4
