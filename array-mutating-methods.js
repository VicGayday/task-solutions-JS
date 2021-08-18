//Given an array of integers your solution should find the smallest integer.

//For example:

    //Given [34, 15, 88, 2] your solution will return 2
    //Given [34, -345, -1, 100] your solution will return -345

//You can assume, for the purpose of this kata, that the supplied array will not be empty.

//My solution:

function findSmallestInt(args) {
  const sortedArr = args.sort((a, b) => a - b);    //sort the array from smallest integers to bigger ones
  const smallestInt = sortedArr.shift();           //delete first element (which is smallest integer now) of the array and save it into variable
  return smallestInt;
}
console.log(findSmallestInt([78, 56, 232, 12, 8]));

//Finish the solution so that it sorts the passed in array of numbers.
//If the function passes in an empty array or null/nil value then it should return an empty array.

//My solution:

function solution(nums) {
  if (nums !== null) {                       //check if array is not empty
    return nums.sort((a, b) => a - b);       //then use callback function to sort it in ascending order
  } else {
    return [];                               //if the array is empty - return empty array
  }
}
