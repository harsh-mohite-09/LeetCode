// 319. Bulb Switcher

// There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

// On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on).
// For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

// Return the number of bulbs that are on after n rounds.

var bulbSwitch = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(Math.sqrt(n))) count++;
  }
  return count;
};

var bulbSwitch = function (n) {
  return Math.floor(Math.sqrt(n));
};

console.log(bulbSwitch(3)); //1
console.log(bulbSwitch(0)); //0
console.log(bulbSwitch(1)); //1
// console.log(bulbSwitch(5));
