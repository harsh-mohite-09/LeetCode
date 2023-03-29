// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices
// i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate = function (nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]].push(i);
    } else {
      obj[nums[i]] = [i];
    }

    if (Math.abs(obj[nums[i]].at(-1) - obj[nums[i]].at(-2)) <= k) {
      return true;
    }
  }
  return false;
};

var containsNearbyDuplicate = function (nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined && Math.abs(obj[nums[i]] - i) <= k) {
      return true;
    } else {
      obj[nums[i]] = i;
    }
  }
  return false;
};

var containsNearbyDuplicate = function (nums, k) {
  const obj = {};

  return nums.reduce((acc, curr, i) => {
    if (obj[curr] !== undefined && Math.abs(obj[curr] - i) <= k) return true;
    else {
      obj[curr] = i;
      return acc;
    }
  }, false);
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([4, 1, 2, 3, 1, 5], 3));
