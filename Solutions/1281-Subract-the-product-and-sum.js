// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = function (n) {
  if (n < 10) return 0;
  let product = 1;
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    product *= digit;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return product - sum;
};

// const subtractProductAndSum = function(n) {
//     if(n < 10) return 0;
//     let product = 1;
//     let sum = 0;
//     while(1) {
//         let digit = n % 10;
//         product *= digit;
//         sum += digit;
//         n = Math.floor(n/10);
//         if(n < 10) {
//             product *= n;
//             sum += n;
//             return product - sum;
//         }
//     }
// };

console.log(subtractProductAndSum(234)); // 15
