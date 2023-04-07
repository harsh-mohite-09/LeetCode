// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// This appraoch uses STACK array to track the pairs.
// 1. If the current para is opening, push it to the stack.
// 2. Else get the last element of the stack by popping
//    it out and check if it is the pair  of current element or not.
// 3. If it is not a pair return false.
// 4. In the end, the stack should be empty hence return true for its length === 0;

var isValid = function (s) {
  let stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      stack.push(s[i]);
    } else if (pairs[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("[{()}]")); // true
