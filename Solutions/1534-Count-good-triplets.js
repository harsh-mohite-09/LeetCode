// 1534. Count Good Triplets

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

var countGoodTriplets = function (arr, a, b, c) {
  let output = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let da = Math.abs(arr[i] - arr[j]);
        let db = Math.abs(arr[j] - arr[k]);
        let dc = Math.abs(arr[i] - arr[k]);
        if (da <= a && db <= b && dc <= c) output++;
      }
    }
  }
  return output;
};

//////  OPTIMIZED SOLUTION  /////////////////////////////////////

var countGoodTriplets = function (arr, a, b, c) {
  let output = 0;
  let n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (Math.abs(arr[i] - arr[j]) <= a) {
        for (let k = j + 1; k < n; k++) {
          if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c)
            output++;
        }
      }
    }
  }
  return output;
};
