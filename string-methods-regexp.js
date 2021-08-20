//Simple, remove the spaces from the string, then return the resultant string.

//My solution:

function noSpace(x) {
  const str = x
    .split(" ")                         //make an array
    .filter((it) => it || false)        //filter array from empty spaces(because empty string is equal to false)
    .join("");                          //make a string again
  return str;
}


//Given a string, return a copy of the string with the vowels' case swapped.

//Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

//Please make sure you only swap cases for the vowels.


//My solution:

function swapVowelCase(str) {
  return str.replace(/[aeiou]/gi, (x) =>                 //using method string replace with global flag and ignoring the case
    /[AEIOU]/.test(x) ? x.toLowerCase() : x.toUpperCase() //second argument of this method can also be callback-function
  );
}

//Here you have a connected to a socket, and the data looks very strange.
//It seems to be separated by a random special character! Oh No!
//We need your help to find the special character, parse the data, and return it translated!
// There isn't much time, hurry we need your help!

//My solution:

function wordSplitter(string){
return string
  .replace(/[~`!#$%\^&*+=\\[\]\\';,/{}|\\":<>\?]/g, ",")   //replace all special character to ','
  .split(",")                                              //make an array, splittig the elements by ','
  .filter((it) => it || false)                             //filter the array from empty elements
}

display.log(
  wordSplitter("32.0500;-6C:PITCH=-72#ROLL!21.3*REGISTER:90.345689&ARMED?-25")
);

//Write a function that converts any sentence into a V A P O R W A V E sentence.
//a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces
//between each letter (or special character) to create this V A P O R W A V E effect.

function vaporcode(string) {
  const vaporstring = string
    .toUpperCase()
    .split("")                        //make an array
    .filter((it) => it !== " ")       //filter it from empty spaces
    .join("  ");                      //make a string again with two spaces between each character
  return vaporstring;
}

console.log(vaporcode("Let's go to the movies"));

//The aim of this task is to split a given string into different strings of equal size.
//Needed size of the string is given as a number.

//My solution:

function splitInParts(s, partLength) {
  const re = new RegExp(`\\w{1,${partLength}}`, "g");   //use constructor for regexp because it allows to use template literals
  return s.match(re).join(' ')
}
display.log(splitInParts("supercalifragilisticexpialidocious", 5));






