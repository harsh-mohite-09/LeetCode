// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// const shuffle = function (nums, n) {
//   let arr = [];
//   for (let i = 0, a = 1; i < n; i++, a += 2) {
//     arr[i * 2] = nums[i];
//     arr[a] = nums[n + i];
//   }
//   return arr;
// };

const shuffle = function (nums, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i * 2] = nums[i];
    arr[2 * i + 1] = nums[n + i];
  }
  return arr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7])); // [2,3,5,4,1,7];
