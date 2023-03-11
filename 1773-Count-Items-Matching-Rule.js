// 1773. Count Items Matching a Rule

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item.
// You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// var countMatches = function (items, ruleKey, ruleValue) {
//   let itemObj = { type: 0, color: 1, name: 2 };
//   let match = 0;
//   for (let i = 0; i < items.length; i++) {
//     if (items[i][itemObj[ruleKey]] === ruleValue) {
//       match++;
//     }
//   }
//   return match;
// };

var countMatches = function (items, ruleKey, ruleValue) {
  let itemObj = { type: 0, color: 1, name: 2 };
  return items.reduce(
    (acc, curr) => (curr[itemObj[ruleKey]] === ruleValue ? ++acc : acc),
    0
  );
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
