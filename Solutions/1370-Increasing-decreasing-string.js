// 1370. Increasing Decreasing String

// You are given a string s. Reorder the string using the following algorithm:

// Pick the smallest character from s and append it to the result.

// Pick the smallest character from s which is greater than the last
// appended character to the result and append it.

// Repeat step 2 until you cannot pick more characters.

// Pick the largest character from s and append it to the result.

// Pick the largest character from s which is smaller than the last
// appended character to the result and append it.

// Repeat step 5 until you cannot pick more characters.

// Repeat the steps from 1 to 6 until you pick all characters from s.

// In each step, If the smallest or the largest character appears more
// than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.

var sortString = function (s) {
  const myMap = new Map();
  let output = "";
  for (let i = 0; i < s.length; i++) {
    myMap.set(s[i], myMap.has(s[i]) ? myMap.get(s[i]) + 1 : 1);
  }
  const arr = [...myMap].sort();
  let n = s.length;
  while (n > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] > 0) {
        output += arr[i][0];
        arr[i][1] -= 1;
        n--;
      }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][1] > 0) {
        output += arr[i][0];
        arr[i][1] -= 1;
        n--;
      }
    }
  }
  return output;
};

console.log(sortString("aaaabbbbcccc"));
console.log(sortString("rat"));
