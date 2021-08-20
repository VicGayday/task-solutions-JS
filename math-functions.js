// Complete the function which converts hex number (given as a string) to a decimal number.

//My solution:

function hexToDec(hexString) {
  return parseInt(hexString, 16);          //second argument of parseInt function - is radix, for hex numbers.
}

console.log(hexToDec("FF"));   //will retuen 255

//Two red beads are placed between every two blue beads. There are N blue beads.
//After looking at the arrangement below work out the number of red beads.

//blue red red blue red red blue red red blue red red blue red red blue
//If there are less than 2 blue beads return 0.

//My solution:

function countRedBeads(n) {
  if (n < 2) {
    return 0;
  }
  if (n > 2) {
    return (n - 1) * 2;        //subtract 1 blue bead that comes at the very end, then the number of bead will be exactly two times higher
  }
}
console.log(countRedBeads(5));     //will show 8

//Given an integral number, determine if it's a square number.

//My solution:

const isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0 ? true : false;
};

console.log(isSquare(25));    //will return true

//You are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81
//and 12 is 1.

//My solution:

function squareDigits(num){
  const result = num.toString().split('').map(it => Math.pow(it, 2)).join('')  //change number to string, then to array of digits, then square every digit, then make string again
  return +result                                                               //return number
}

console.log(squareDigits(3212))  //will return 9414