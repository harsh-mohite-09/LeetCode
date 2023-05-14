// 1304. Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

var sumZero = function (n) {
  let output = [];
  for (let i = 1; i <= n / 2; i++) {
    output.push(i, -i);
  }
  if (n % 2 !== 0) {
    output.push(0);
  }
  return output;
};

var sumZero = function (n) {
  const output = n % 2 === 0 ? [] : [0];
  for (let i = 1; i <= n / 2; i++) {
    output.push(i, -i);
  }
  return output;
};

var sumZero = (n) => [...new Array(n).keys(), ((1 - n) * n) / 2].slice(1);

console.log(sumZero(5));
console.log(sumZero(3));
console.log(sumZero(1));
console.log(sumZero(4));
console.log(sumZero(6));
console.log(sumZero(11));
