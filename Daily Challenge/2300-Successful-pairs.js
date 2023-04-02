// 2300. Successful Pairs of Spells and Potions
// Medium

// You are given two positive integer arrays spells and potions, of length n and m respectively,
// where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

// O(n x m)
var successfulPairs = function (spells, potions, success) {
  let output = [];
  for (let i = 0; i < spells.length; i++) {
    let successCount = 0;
    for (let j = 0; j < potions.length; j++) {
      if (spells[i] * potions[j] >= success) successCount++;
    }
    output.push(successCount);
  }
  return output;
};

// O(m + n.log(m))

var successfulPairs = function (spells, potions, success) {
  let output = [];
  let p = potions.length;
  potions.sort((a, b) => a - b);
  for (let i = 0; i < spells.length; i++) {
    let successCount = 0;
    for (let j = 0; j < potions.length; j++) {
      if (spells[i] * potions[j] >= success) {
        successCount = p - j;
        break;
      }
    }
    output.push(successCount);
  }
  return output;
};

// Binary Search

var successfulPairs = function (spells, potions, success) {
  const output = [];
  potions.sort((a, b) => a - b);
  for (const spell of spells) {
    let left = 0,
      right = potions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] * spell < success) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    output.push(potions.length - left);
  }
  return output;
};

/// Modified Binary Search

// var binary_search = function (arr, spell, ele) {
//   let start = 0,
//     end = arr.length - 1,
//     mid = 0;
//   while (start <= end) {
//     mid = Math.floor((end + start) / 2);
//     if (arr[mid] * spell < ele) start = mid + 1;
//     else end = mid - 1;
//   }
//   return start;
// };

// var successfulPairs = function (spells, potions, success) {
//   let pairs = [];
//   potions.sort((a, b) => a - b);

//   for (let i = 0; i < spells.length; i++) {
//     let indx = binary_search(potions, spells[i], success);

//     pairs.push(potions.length - indx);
//   }

//   return pairs;
// };

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)); // [4,0,3]
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)); // [2,0,2]
