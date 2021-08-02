//Simple, remove the spaces from the string, then return the resultant string.

//My solution:

function noSpace(x) {
  const str = x
    .split(" ")                         //make an array
    .filter((it) => it || false)        //filter array from empty spaces(because empty string is equal to false)
    .join("");                          //make a string again
  return str;
}