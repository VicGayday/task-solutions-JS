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

display.log(pal("abvcaacba"));

