// 1491. Average Salary Excluding the Minimum and Maximum Salary

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.

var average = function (salary) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < salary.length; i++) {
    if (salary[i] < min) min = salary[i];
    if (salary[i] > max) max = salary[i];
    sum += salary[i];
  }
  return (sum - max - min) / (salary.length - 2);
};

var average = function (salary) {
  const sumObj = salary.reduce(
    ({ sum, min, max }, curr) => {
      return {
        sum: sum + curr,
        min: curr < min ? curr : min,
        max: curr > max ? curr : max,
      };
    },
    { sum: 0, max: -Infinity, min: Infinity }
  );

  return (sumObj.sum - sumObj.max - sumObj.min) / (salary.length - 2);
};

console.log(average([4000, 3000, 1000, 2000]));
console.log(average([1000, 2000, 3000]));
