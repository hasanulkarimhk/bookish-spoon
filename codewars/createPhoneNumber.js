const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const myArrStr = myArr.map(num => num.toString());

const str = `(${myArrStr[0]}${myArrStr[1]}${myArrStr[2]}) ${myArrStr[3]}${myArrStr[4]}${myArrStr[5]}-${myArrStr[6]}${myArrStr[7]}${myArrStr[8]}${myArrStr[9]}`

console.log(str)
