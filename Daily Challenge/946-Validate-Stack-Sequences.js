// 946. Validate Stack Sequences
// Medium

// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a
// sequence of push and pop operations on an initially empty stack, or false otherwise.

// Example 1:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// Example 2:
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

// Constraints:

// 1 <= pushed.length <= 1000
// 0 <= pushed[i] <= 1000
// All the elements of pushed are unique.
// popped.length == pushed.length
// popped is a permutation of pushed.

// Best approach for this questions constraints

var validateStackSequences = function (pushed, popped) {
  stack = [];
  let n = 2 * pushed.length;
  let i = 0;
  let j = 0;
  while (n > 0) {
    if (stack.at(-1) === popped[j]) {
      stack.pop();
      j++;
    } else {
      if (pushed[i] === undefined) return false;
      stack.push(pushed[i]);
      i++;
    }
    n--;
  }
  return true;
};

// Best generic solution
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;
  for (const num of pushed) {
    stack.push(num);
    while (stack.length && stack.at(-1) === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return pushed.length === i;
};

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 1, 3, 2, 5]));
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
// console.log(validateStackSequences([2, 1, 0], [1, 2, 0]));
// console.log(validateStackSequences([2, 3, 0, 1], [0, 3, 2, 1]));
