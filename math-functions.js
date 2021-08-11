// Complete the function which converts hex number (given as a string) to a decimal number.

//My solution:

function hexToDec(hexString) {
  return parseInt(hexString, 16);          //second argument of parseInt function - is radix, for hex numbers.
}

console.log(hexToDec("FF"));   //will retuen 255