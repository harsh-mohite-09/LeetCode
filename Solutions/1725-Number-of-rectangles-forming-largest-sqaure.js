// 1725. Number Of Rectangles That Can Form The Largest Square

// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example,
// if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

var countGoodRectangles = function (rectangles) {
  let maxLen = 0;
  const obj = {};
  rectangles.forEach((pair) => {
    const currMax = Math.min(...pair);
    if (currMax > maxLen) maxLen = currMax;
    obj[currMax] = obj[currMax] ? obj[currMax] + 1 : 1;
  });
  return obj[maxLen];
};

// No hashmap needed as max can be tracked in a serial manner
// while iterating through the array.

var countGoodRectangles = function (rectangles) {
  let maxLen = 0;
  let count = 0;
  rectangles.forEach((pair) => {
    const currMax = Math.min(...pair);
    if (currMax > maxLen) {
      count = 0;
      maxLen = currMax;
    }
    if (currMax === maxLen) count++;
  });
  return count;
};

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
); // 3

console.log(
  countGoodRectangles([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
); // 3
