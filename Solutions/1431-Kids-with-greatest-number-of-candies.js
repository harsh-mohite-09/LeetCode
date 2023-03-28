// There are n kids with candies. You are given an integer array candies, where each candies[i]
// represents the number of candies the ith kid has, and an integer extraCandies, denoting the
// number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if,
// after giving the ith kid all the extraCandies, they will have the greatest
// number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

const kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies) - extraCandies;
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] >= max;
  }
  return candies;
};

// const kidsWithCandies = function(candies, extraCandies) {
//     let max = Math.max(...candies) - extraCandies;
//     return candies.map(e => e >= max);
// };

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true, true, true, falsem true];
