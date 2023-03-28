// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// const smallestEvenMultiple = function (n) {
//   if (n % 2 === 0) {
//     return n;
//   } else {
//     return n * 2;
//   }
// };

const smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : 2 * n;
};

console.log(smallestEvenMultiple(5)); // 10
