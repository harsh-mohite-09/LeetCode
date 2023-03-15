// 1662. Check If Two String Arrays are Equivalent

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};

var arrayStringsAreEqual = function (word1, word2) {
  let str1 = "";
  let str2 = "";
  const length1 = word1.length;
  const length2 = word2.length;
  const maxLength = length1 > length2 ? length1 : length2;
  for (let i = 0; i < maxLength; i++) {
    str1 += word1[i] ?? "";
    str2 += word2[i] ?? "";
  }
  return str1 === str2;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
