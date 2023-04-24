// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const stack = [];
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) break;
        stack.push(needle[j]);
      }
      if (stack.length === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let str = "";
    if (haystack[i] === needle[0]) {
      for (let j = i; j < i + needle.length; j++) {
        str += haystack[j];
      }
      if (str === needle) return i;
    }
  }
  return -1;
};

console.log(strStr("sabbutsad", "sad")); // 0;
console.log(strStr("leetcode", "leeto")); // -1;
console.log(strStr("leetcoders", "codes")); // -1;
console.log(strStr("leetcodes", "code")); // 4;
