// 258. Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit,
// and return it.

var addDigits = function (num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((s, a) => s + +a, 0);
  }
  return num;
};

var addDigits = function (num) {
  while (num > 9) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
};

// Digital Root Approach O(1);

//The digital root is the value modulo (b - 1) where b is the base. In this case, 10.

var addDigits = function (num) {
  if (num === 0) return 0;
  return num % 9 === 0 ? 9 : num % 9;
};

var addDigits = (num) => (num === 0 ? 0 : num % 9 === 0 ? 9 : num % 9);

console.log(addDigits(38));
console.log(addDigits(0));
console.log(addDigits(5));
