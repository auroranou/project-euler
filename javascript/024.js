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

function getMillionthPermutation(startingCount, string) {
  // permutationCount stores a reference to the initial number of permutations at which we are starting
  let permutationCount = startingCount;
  // digitIndex refers to the index of the number that will eventually be added to the lexographic permutation string
  let digitIndex = 0;

  while (permutationCount < 1000000) {
    permutationCount += permutationsPerDigit;
    digitIndex += 1;
  }

  // Splice out the digit matching the digitIndex (subtract 1 because the loop takes you just over 1million,
  // and we want the index of the digit that comes right before that)
  // Splicing also removes the digit from the array, so it won't be used multiple times in the answer string
  let digitString = digits.splice(digitIndex - 1, 1);
  string += digitString[0] + '';

  if (!digits.length) {
    return string;
  } else {
    // Recurse over the remaining digits until all have been used
    return getMillionthPermutation(permutationCount - permutationsPerDigit, string);
  }
}

let answer = getMillionthPermutation(0, '');
console.log(answer);
