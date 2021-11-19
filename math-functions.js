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


//Given the triangle of consecutive odd numbers:

            // 1
         // 3     5
      // 7     9    11
  // 13    15    17    19
//21    23    25    27    29
//...

//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

//1 -->  1
//2 --> 3 + 5 = 8

//My solution:

//This is tricky task, more of math thinking:

function rowSumOddNumbers(n) {
  return Math.pow(n, 2) * n;                  //if one try to calculate this tree to see some consistency, you can see that sum of each row divided to n is equal to squared n. So to find the sum we need to make oposite action multiply sqared n to n.
}

//You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests,
//who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time,
//because you have only one pot for your job. How much time do you need?
//Implement a function, which takes a non-negative integer, representing the number of eggs to boil.
//It must return the time in minutes (integer), which it takes to have all the eggs boiled.
//    you can put at most 8 eggs into the pot at once
//    it takes 5 minutes to boil an egg
//    we assume, that the water is boiling all the time (no time to heat up)
//    for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

//My solution:

function cookingTime(eggs) {
  if (eggs === 0) { return 0}                       //check if there are eggs
  if (eggs % 8 === 0) {return eggs / 8 * 5}         //check if all the pots contain 8 eggs
  const fullPots = Math.floor(eggs / 8)             //make rounded number of eggs multiple to 8
  return eggs <= 8 ? 5 : fullPots * 5 + 5           //using ternary operator return 5 minutes if there is only 1 pot is needed or return fullPots needed time plus additional 5 minutes for extra eggs
}

