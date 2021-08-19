//In a small town the population is p0 = 1000 at the beginning of a year.
//The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year
//come to live in the town. How many years does the town need to see its population greater or equal
//to p = 1200 inhabitants?

//More generally given parameters:

//p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

//the function nb_year should return n number of entire years needed to get a population greater or equal to p.

//aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

//My solution:

function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug;
    count += 1;
  }
  return count;
}

console.log(nbYear(1500, 5, 100, 5000))

// Write a function, which arguments are array of integers and an integer.
// The function should return array with two integers from initial array - its product is equal to integer form second argument. Otherwise the function will return empty array.

//My solution:

function multiply(arr, nmb) {
  for (let i = 0; i < arr.length; i += 1) {         //using two loops:
    for (let j = i + 1; j < arr.length; j += 1) {   //second goes forward on 1 item,
      if (arr[i] * arr[j] === nmb) {                //this way it is possible to compare elements of one array
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

console.log(multiply([1, 4, 6, 8, 5, 2], 20));

// Check if the string is palindrome.

// My solution:

function pal(word) {
  for (let i = 0; i < word.length / 2; i += 1) {   // count half of the word
    if (word[i] !== word[word.length - 1 - i]) {   //compare both halves of the word
      return false;
    }
  }
  return true;
}

console.log(pal("abvcaacba"));

//Write a function that takes a positive integer n, sums all the cubed values from 1 to n,
//and returns that sum.

//Assume that the input n will always be a positive integer.

//My solution:

function sumCubes(n) {
  let result = 0;
  for (let i = n; i > 0; i -= 1) {         //using loop to work with all integers that are less than given integer
    result += Math.pow([i], 3);            //use math function that allows to elevate the integer to needed exponent
  }
  return result;
}
console.log(sumCubes(3));


//Complete the function that accepts a string parameter, and reverses each word in the string.
//All spaces in the string should be retained.

//My solution:

function reverseWords(str) {
  let newStr = ''
  for (let i=str.length -1; i>=0; i-=1) {      //start loop from the end of string
    newStr +=str[i]                            //add new character to an empty string on each iteration from the end of initial string
  }
  const reverseStr = newStr.split(' ').reverse().join(' ')   //reverse the string itself
  return reverseStr
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

