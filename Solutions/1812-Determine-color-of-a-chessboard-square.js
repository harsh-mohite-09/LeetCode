// 1812. Determine Color of a Chessboard Square

// You are given coordinates, a string that represents the coordinates of a square of the chessboard.

// Return true if the square is white, and false if the square is black.

// The coordinate will always represent a valid chessboard square.
// The coordinate will always have the letter first, and the number second.

var squareIsWhite = (c) => (c[0].charCodeAt(0) - 96 + +c[1]) % 2 !== 0;

console.log(squareIsWhite("a1")); //false
console.log(squareIsWhite("h3")); // true
console.log(squareIsWhite("c7")); // false
