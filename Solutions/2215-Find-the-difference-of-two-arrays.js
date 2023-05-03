// 2215. Find the Difference of Two Arrays

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// BEST APPROACH
// Just delete the items of nums from opposite set

var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  nums1.forEach((n) => set2.delete(n));
  nums2.forEach((n) => set1.delete(n));
  return [[...set1], [...set2]];
};

/////////////------------Other Approaches----------///////////////////////////

var findDifference = function (nums1, nums2) {
  const first = [...new Set(nums1.filter((n) => !nums2.includes(n)))];
  const second = [...new Set(nums2.filter((n) => !nums1.includes(n)))];
  return [first, second];
};

//////////////////////////////////////////////////////////////////////////

var findDifference = function (nums1, nums2) {
  const answer = [[], []];
  for (const n of nums1) {
    if (!nums2.includes(n) && !answer[0].includes(n)) answer[0].push(n);
  }
  for (const n of nums2) {
    if (!nums1.includes(n) && !answer[1].includes(n)) answer[1].push(n);
  }
  return answer;
};

////////////////////////////////////////////////////////////////////////

var checkNotInArr = (num, arr) => {
  for (const n of arr) {
    if (n === num) return false;
  }
  return true;
};

var findDifference = function (nums1, nums2) {
  const first = [];
  const second = [];
  const firstObj = {};
  const secondObj = {};
  for (const n of nums1) {
    if (checkNotInArr(n, nums2) && !firstObj[n]) {
      first.push(n);
      firstObj[n] = true;
    }
  }
  for (const n of nums2) {
    if (checkNotInArr(n, nums1) && !secondObj[n]) {
      second.push(n);
      secondObj[n] = true;
    }
  }
  return [first, second];
};

///////////////////////////////////////////////////////////////

///// BEST APPROACH USING SETS

var findDifference = function (nums1, nums2) {
  const answer = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const n of set1) {
    if (!set2.has(n)) answer[0].push(n);
  }

  for (const n of set2) {
    if (!set1.has(n)) answer[1].push(n);
  }

  return answer;
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]
