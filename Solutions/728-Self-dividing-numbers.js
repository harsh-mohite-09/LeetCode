// 728. Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the
//self-dividing numbers in the range [left, right].

var selfDividingNumbers = function (left, right) {
  const output = [];
  for (let i = left; i <= right; i++) {
    if (isDivisibleByDigits(i)) output.push(i);
  }
  return output;
};

const isDivisibleByDigits = (num) => {
  let n = num;
  while (n > 0) {
    const digit = n % 10;
    if (num % digit !== 0) return false;
    n = Math.floor(n / 10);
  }
  return true;
};

console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(47, 85)); // [48,55,66,77]
