// 2520. Count the Digits That Divide a Number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// var countDigits = function (num) {
//   let count = 0;
//   let myNum = num;
//   while (num > 0) {
//     let digit = num % 10;
//     if (myNum % digit === 0) count++;
//     num = Math.floor(num / 10);
//   }
//   return count;
// };

var countDigits = (num) =>
  String(num)
    .split("")
    .filter((e) => num % +e === 0).length;

console.log(countDigits(121));
console.log(countDigits(1248));
