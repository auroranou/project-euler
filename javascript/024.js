/*
  A permutation is an ordered arrangement of objects.
  For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4.
  If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.
  The lexicographic permutations of 0, 1 and 2 are:

    012   021   102   120   201   210

  What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

'use strict';

let factorial = require('./utils').factorial;

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// There are 10! possible permutations, or 3,628,800 possibilities
let totalPermutations = factorial(digits.length);

// This means there are 9! possibilities beginning with each digit
let permutationsPerDigit = factorial(digits.length - 1);

function getMillionthPermutation(startingCount, millionthPermutationString) {
  // permutationsPerDigit has to be recalculated each time as digits shrinks in size
  let permutationsPerDigit = factorial(digits.length - 1);
  // startingCount indicates the number of permutations at which we should begin
    // At the 0th position, this is 0
    // At the 1st position, it is 725,760 (the closest thing to 1million without going over)
    // And so on
  let digitIndex = 0;
  // digitIndex tracks the index of the number to be added to millionthPermutationString from the digits array

  while (startingCount < 1000000) {
    startingCount += permutationsPerDigit;
    digitIndex += 1;
  }

  // Splice out the desired digit based on its index
  // Subtract one since digitIndex actually refers to the number that takes startingCount over 1million
  // Splicing also removes the digit from the digits array, so no numbers are used multiple times
  let digitString = digits.splice(digitIndex - 1, 1);
  millionthPermutationString += digitString[0] + '';

  if (!digits.length) {
    return millionthPermutationString;
  } else {
    // If there are still digits remaining, recurse over the remaining ones
    return getMillionthPermutation(startingCount - permutationsPerDigit, millionthPermutationString);
  }
}

let answer = getMillionthPermutation(0, '');
console.log(answer);
// Time: 94ms
