// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

const finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (/\+/.test(operations[i])) x++;
    else x--;
  }
  return x;
};

// const finalValueAfterOperations = function (operations) {
//   return operations.reduce((s, a) => s + (/\+/.test(a) ? 1 : -1), 0);
// };

console.log(finalValueAfterOperations(["++X", "--X", "++X"])); // 1
