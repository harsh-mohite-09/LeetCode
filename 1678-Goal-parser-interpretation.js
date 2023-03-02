// You own a Goal Parser that can interpret a string command.
// The command consists of an alphabet of "G", "()" and/or "(al)" in some order.
// The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".
// The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// In this example we learnt that paranthesis have to escaped for matching since they are a special character.

const interpret = function (command) {
  return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
};

// for loop approach;

const interpret2 = function (command) {
  let output = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") output += "G";
    else if (command[i] === "(") {
      if (command[i + 1] === ")") {
        output += "o";
        i++;
      } else {
        output += "al";
        i += 3;
      }
    }
  }
  return output;
};

console.log(interpret("G()(al)"));
console.log(interpret("G()()()()(al)"));

console.log(interpret2("G()(al)"));
console.log(interpret2("G()()()()(al)"));
