// You are given an m x n integer grid accounts where accounts[i][j] is the
// amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.

// const maximumWealth = function (accounts) {
//   return Math.max(...accounts.map((e) => e.reduce((s, a) => s + a)));
// };

const maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let amount = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      amount += accounts[i][j];
    }
    if (amount > max) max = amount;
  }
  return max;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); //6
