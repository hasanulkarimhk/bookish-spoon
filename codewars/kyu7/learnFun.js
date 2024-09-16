const str = 'The quick brown fox jumps over the lazy dog.';

const wordss = str.split(' ');

console.log(wordss[2]);
// [
//   'The',   'quick',
//   'brown', 'fox',
//   'jumps', 'over',
//   'the',   'lazy',
//   'dog.'
// ]
// console.log(wordss[2]);
// Here str.split(' ') does is make a array and puts in that array means puts every individual words and makes an array of that
// Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]










// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"