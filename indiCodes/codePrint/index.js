
function sum10() {
  let inp0Num = document.querySelector('.inp0').value;


  console.log(parseInt(inp0Num) + 10);
}

function printFun(){
let inp0Num = document.querySelector('.inp0').value;

document.querySelector('.resultAll').innerHTML = `${parseInt(inp0Num) + 10}`;

}

// We have to define the variables inside funtion if we're using it inside the function.

