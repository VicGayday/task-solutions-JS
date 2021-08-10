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
