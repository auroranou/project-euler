/* ------
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
------ */

// Since 2^1000 will be a very large number, using Math.pow(2, 1000) will result in an exponential value
// To prevent losing any characters, use an array to calculate the answer instead
var arr = [2];
var index = 1;

// This function loops over each element in the array to produce a reversed version of the answer
  // For example, to multiply the number 150 by 2, the function expects an input of [0, 5, 1]
  // and will output a result of [0, 0, 3]
// A reversed array is required because it makes it easier to carry the one as we progress through the loop
function multiplyByTwo(arr) {
  var carryOne = false;
  
  for (var i = 0; i < arr.length; i++) {
    var nTimesTwo = +arr[i] * 2;
    
    // If we're carrying a 1 from the previous operation, add 1 here
    if (carryOne) nTimesTwo += 1;
    
    // If 2n is two digits long, replace the array element with the second digit
    // and set the carryOne variable to true for the next iteration
    if (nTimesTwo >= 10) {
      carryOne = true;
      arr[i] = +(''+nTimesTwo).charAt(1);
    } else {
      // Otherwise, just update the array element
      carryOne = false;
      arr[i] = nTimesTwo;
    }
  }
  
  // If we end up carrying 1 at the end of the loop, we need to add a 1 to the end of the array
  if (carryOne) arr.push(1);
  
  return arr;
}

while (index < 1000) {
  arr = multiplyByTwo(arr);
  index += 1;
}

// The value of 2^1000 is equal to arr.reverse().join('');
// But since we only need the sum of numbers, we can just reduce the array
var answer = arr.reduce((x, y) => +x + +y);
console.log(answer);
