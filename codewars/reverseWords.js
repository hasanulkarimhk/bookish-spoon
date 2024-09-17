const str = "This is the sentence";

// console.log(str.split(' ').reverse().join(' '));


// str.split(' ').map((words) => { "hello" })
console.log((str.split(' ').map((words) => words.split('').reverse().join(''))).join(' '));