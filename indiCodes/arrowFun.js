const greet = (namex) => { console.log("Hello ", { namex }) };

greet('Kitten'); // I think when we called an arrow funtion we didn't need parenthesis but in classic javascript we have to use it.


function greet2(namey) {
  console.log("Hello", { namey });
}

greet2('Kitty');
// 'function' is not allowed as a variable declaration name.
