// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// const createTargetArray = function (nums, index) {
//   let target = [];
//   for (let i = 0; i < nums.length; i++) {
//     target.splice(index[i], 0, nums[i]);
//   }
//   return target;
// };

// const createTargetArray = function (nums, index) {
//   let target = [];
//   for (let i = 0; i < nums.length; i++) {
//     target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i])];
//   }
//   return target;
// };

// Array index manipulation method. We extend the array using the one extra index position
// given by Array.length and use to shift the elements to the right from the index position
// in which we want to insert a new element.

// 1. The for loop is used to iterate through the array elements.
// 2. All the elements whose index is greater than the given index are shifted one step to the right.
// 3. Then, the element is added to the given index.

const createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = target.length; j > index[i]; j--) {
      // Shift the elements that are greater than index
      target[j] = target[j - 1];
    }
    target[index[i]] = nums[i];
  }
  return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1])); // [0,4,1,3,2]
