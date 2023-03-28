// 2325. Decode the Message

// You are given the strings key and message, which represent a cipher key and a secret message, respectively.
// The steps to decode message are as follows:

// Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// Align the substitution table with the regular English alphabet.
// Each letter in message is then substituted using the table.
// Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet),
// we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

// var decodeMessage = function (key, message) {
//   let alphabets = "abcdefghijklmnopqrstuvwxyz";
//   let i = 0;
//   let decipherMap = key.split("").reduce((acc, curr) => {
//     if (!acc[curr] && curr !== " ") {
//       acc[curr] = alphabets[i];
//       i++;
//     }
//     return acc;
//   }, {});
//   return message
//     .split("")
//     .reduce(
//       (acc, curr) => (curr !== " " ? acc + decipherMap[curr] : acc + " "),
//       ""
//     );
// };

var decodeMessage = function (key, message) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let k = 0;
  let decipherMap = {};
  let decodedMessage = "";
  for (let i = 0; i < key.length; i++) {
    if (!decipherMap[key[i]] && key[i] !== " ") {
      decipherMap[key[i]] = alphabets[k];
      k++;
    }
  }
  for (let j = 0; j < message.length; j++) {
    decodedMessage += message[j] !== " " ? decipherMap[message[j]] : " ";
  }
  return decodedMessage;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);

// "this is a secret"
