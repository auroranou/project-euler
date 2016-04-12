/* -----
The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:

28 = 2^2 + 2^3 + 2^4
33 = 3^2 + 2^3 + 2^4
49 = 5^2 + 2^3 + 2^4
47 = 2^2 + 3^3 + 2^4

How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?
----- */

'use strict';

let utils = require('./utils');

// Get the largest numbers that can be squared, cubed, or multiplied to the fourth power
// without going over 50,000,000
let squareRoot = Math.ceil( Math.sqrt(50000000) );
let cubeRoot = Math.ceil( Math.pow(50000000, 1/3) );
let quadRoot = Math.ceil( Math.pow(50000000, 1/4) );

// Set up arrays to hold primes that fall between 2 and the upper bound
let lessThanSquareRoot = [];
let lessThanCubeRoot = [];
let lessThanQuadRoot = [];

// Put primes to the appropriate power in the appropriate array
for (let i = 0; i < squareRoot; i++) {
  if (utils.isPrime(i)) {
    lessThanSquareRoot.push( Math.pow(i, 2) );

    if (i <= cubeRoot) lessThanCubeRoot.push( Math.pow(i, 3) );
    if (i <= quadRoot) lessThanQuadRoot.push( Math.pow(i, 4) );
  }
}

// Instead of nesting three loops, first get the results of x^2 + z^4 where sum is less than 50 million
// Save these to a new array
let squareQuadArr = [];

for (var i = 0; i < lessThanQuadRoot.length; i++) {
  for (var j = 0; j < lessThanSquareRoot.length; j++) {
    let sum = lessThanQuadRoot[i] + lessThanSquareRoot[j];

    if (sum < 50000000) {
      squareQuadArr.push(sum);
    }
  }
}

// Create a set to track unique combinations where x^2 + y^3 + z^4 is less than 50 million
  // (Although a counter would be a lot faster,
  // using a set provides an easier way of skipping duplicate values)
let totalSet = new Set();

// Loop over the (y^3) and (x^2 + z^4) arrays, adding values to the set
for (var i = 0; i < squareQuadArr.length; i++) {
  for (var j = 0; j < lessThanCubeRoot.length; j++) {
    let sum = squareQuadArr[i] + lessThanCubeRoot[j];

    if (sum < 50000000) {
      totalSet.add(sum);
    }
  }
}

console.log(totalSet.size);

// Run time: 1.444 seconds