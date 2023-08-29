const nums = [-8, -6, -7, -1, -2, -3, -4, -5, 7];

const findMaxThree = (arr) => {
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] >= max2) {
      max3 = max2;
      max2 = arr[i];
    } else if (arr[i] >= max3) {
      max3 = arr[i];
    }
  }
  return [max1, max2, max3];
};

console.log(findMaxThree(nums));

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
console.log(arr2.splice(2, 1, 9, 7));
console.log(arr2);
