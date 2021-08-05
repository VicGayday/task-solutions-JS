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