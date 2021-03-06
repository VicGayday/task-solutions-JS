// There are two arrays of integers. Make another array which consists of those integers only,
//that are founded in both initial arrays. The integers in third array should not duplicate.

//My solution:

function mergeArrays(arr1, arr2) {
  const finalArray = arr1
    .filter((item, index, array) => {
      return array.indexOf(item) === index; //remove dublicates from 1st array
    })
    .filter((item) => {
      return arr2.indexOf(item) !== -1; //уremove elements which do not exist in 2nd array
    });
  return finalArray;
}

console.log(
  mergeArrays([1, 2, 3, 4, 8, 9, 10, 3, 7], [0, 3, 4, 5, 6, 7, 8, 9, 10, 11]) //the result will be [3,4,8,9,10,7]
);


//code-wars task:

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

//Some cases:

//[22, -6, 32, 82, 9, 25] => [-6, 32, 25]

//[68, -1, 1, -7, 10, 10] => [-1, 10]

//[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//My solution:

function multipleOfIndex(array) {
  const multipleArray = array.filter((item, index, array) => {   //filter the array
    if (item % index === 0) {                                    //if element of the array is multiple to its own index
      return item;                                               //then return this element
    }
    return ""
  });
  return multipleArray;
}

//Given an array of digital numbers, return a new array of length number containing the last
//even numbers from the original array (in the same order).
//The original array will be not empty and will contain at least "number" even numbers.

//My solution:

function evenNumbers(array, number) {
  const filteredArr = array.filter((item, index) => {       //filter array for even numbers only
    return item % 2 === 0;
  });
  const evenArray = filteredArr.slice(`-${number}`);      //use slice method with negative index, so it copy elements from the end of initial array
  return evenArray
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

//Example:

//Input:

//'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

//Output:

//'alpha beta gamma delta'

//My solution:

function removeDuplicateWords(s) {
  const noDuplicateStr = s
    .split(" ")                                                      //transform the string into array
    .filter((item, index, array) => array.indexOf(item) === index)   //filter array from duplicates
    .join(" ");                                                      //turn it back to string
  return noDuplicateStr;
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.
//Examples:

//[7] should return 7, because it occurs 1 time (which is odd).
//[0] should return 0, because it occurs 1 time (which is odd).
//[1,1,2] should return 2, because it occurs 1 time (which is odd).

//My solution:

function findOdd(A) {
  const obj = A.reduce((acc, rec) => {
    acc[rec] = (acc[rec] || 0) + 1;             //make an object with value - quantity of each integer appearance
    return acc;
  }, {});
  return Object.keys(obj).reduce((acc, rec) => {  //find out which object key have value that is odd
    return obj[rec] % 2 !== 0 ? +rec : acc;
  }, 0);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));  //will return 5

//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

//arrayDiff([1,2],[1]) == [2]

//If a value is present in b, all of its occurrences must be removed from the other:

//arrayDiff([1,2,2,2,3],[2]) == [1,3]


//My solution:

function arrayDiff(a, b) {
  return a.reduce((acc, rec) => {
    if (b.indexOf(rec) !== -1) {          //check if second array have first array elements
      return acc;
    }
    return [...acc, rec];
  }, []);
}

console.log(arrayDiff([3, 4], [3]));  //will  return [4]


//In this little assignment you are given a string of space separated numbers,
//and have to return the highest and lowest number.

//My solution:

function highAndLow(numbers) {
  const array = numbers.split(" ");                //make an array
  const firstEl = array.reduce((acc, rec) => {     //find the biggest integer in the array
    return Math.max(acc, rec);
  });
  const lastEl = array.reduce((acc, rec) => {      //find the smallest integer in the array
    return Math.min(acc, rec);
  });
  const result = [firstEl, lastEl].join(" ");      //make new array with biggest and smallest integers
  return result;                                   //and transform it into a string
}
console.log(highAndLow("1 2 3 4 5"))         //will return '5, 1'


//Several people are standing in a row divided into two teams.
//The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
//Given an array of positive integers (the weights of the people), return a new array/tuple of two
//integers, where the first one is the total weight of team 1, and the second one is the total weight
//of team 2.
//Array size is at least 1.
//All numbers will be positive.

//My solution:

function rowWeights(array){
  const row1 = array.filter((it, index) => {   //make new array of those integers, which indexes are multiple to 2
  return index % 2 === 0
  }).reduce ((acc, rec) => acc + rec, 0)       //sum up integers in first array

  const row2 = array.filter((it, index) => {   //make second array with integers which indexes are NOT equal to 2.
  return index % 2 !== 0
}).reduce ((acc, rec) => acc + rec, 0)        //sum it up
  return new Array(row1, row2)                //return new array which elements are two previously calculated sums
}

display.log(rowWeights([50,60,70,80]))  // will return [120, 140]

//Return an output string that translates an input string s/$s by replacing each character in s/$s
//with a number representing the number of times that character occurs in s/$s and separating each
//number with the character(s) sep/$sep.

//My solution:

function freqSeq(str, sep) {
  const separatedStr = str.split("")                    //transform string into array
  const count = separatedStr.reduce((acc, rec) => {     //make an object with count of each letter
    acc[rec] = (acc[rec] || 0) + 1
    return acc
  }, {})
  return separatedStr.map((it) => count[it]).join(sep)   //use initial array to replace the letters with values from previosly created object
}

// Write a function that accepts an unlimited number of integer arguments, and adds all of them together.
//The function should reject any arguments that are not integers, and sum the remaining integers.

//My solution:

function sum() {
  return Object.values(arguments)          //using reserved object arguments - taking only its values
  .filter((it) => Number.isInteger(it))    //reject those arguments, which are not integers
  .reduce((acc, rec) => {
    return acc + rec                        //sum all the rest integers
  }, 0)
}
