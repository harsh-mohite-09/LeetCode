// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have. Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// O(n^2)

// const numJewelsInStones = function (jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) count++;
//   }
//   return count;
// };

// const numJewelsInStones = function(jewels, stones) {
//     let count = 0;
//     for(let i=0; i<stones.length; i++) {
//         for(let j=0; j<jewels.length; j++) {
//             if(jewels[j] === stones[i]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };

// const numJewelsInStones = function(jewels, stones) {
//     return [...stones].filter(e=>jewels.includes(e)).length;
// };

// O(J+S) => O(n)

// 1. Make an obj with keys of all the jewels and store true as value.
// 2. Use this object to check whether the jewel is present in your stones or not.

// This appraoch is O(n) as it is 2 for loops with O(jewels.length) & O(stones.length)
// O(J) + O(S) = O(J+S) = O(n);

const numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < jewels.length; i++) {
    obj[jewels[i]] = true;
  }

  for (let i = 0; i < stones.length; i++) {
    if (obj[stones[i]]) count++;
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbBB")); //3
console.log(numJewelsInStones("z", "ZZZ")); //0
