// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an
// array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Using object in this case is the best solution
var sumOfUnique = function (nums) {
  if (nums.length === 1) return nums[0];
  const obj = {};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  for (const num in obj) {
    if (obj[num] === 1) sum += +num;
  }
  return sum;
};

// Looks good but isn't performant

var sumOfUnique = function (nums) {
  let sum = 0;
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    myMap.set(nums[i], myMap.has(nums[i]) ? myMap.get(nums[i]) + 1 : 1);
  }
  for (const [key, value] of myMap) {
    if (value === 1) sum += key;
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1, 1])); // 0
console.log(sumOfUnique([1, 1, 1, 1, 1, 1])); // 0
console.log(sumOfUnique([1])); // 1
console.log(sumOfUnique([1, 2, 3, 4, 5])); // 15
console.log(sumOfUnique([10, 6, 9, 6, 9, 6, 8, 7])); // 25
