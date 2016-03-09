'use strict';

function deduplicate(arr) {
  // Sort by ascending, group like data types together, and remove duplicates
  // TO DO: Allow recursion over nested arrays
  return arr.sort((a, b) => (a > b) ? 1 : -1)
    .sort((a, b) => (typeof a !== typeof b) ? 1 : -1)
    .filter((e, i, a) => (e !== a[i - 1] || !e));
}


function factorial(num) {
  if (!num) return;
  
  let f = 1;
  
  for (var i = 1; i <= num; i++) {
    f *= i;
  }
  
  return f;
}


function getFactors(num, flatten) {
  if (!num) return;
  
  let factors = [];
  let max = Math.round(Math.sqrt(num));
  
  for (var i = 1; i <= max; i++) {
    if (isDivisible(num, i)) {
      factors.push([i, num/i]);
    }
  }
  
  if (flatten) {
    // If the `flatten` flag is passed, reduce to a single level array
    return factors.reduce((prev, curr) =>
      // Check for any duplicate factors
      (curr[0] === curr[1]) ? prev.concat(curr[0]) : prev.concat(curr)
    ).sort((a, b) => a > b ? 1 : -1);
  }

  return factors;
}


function getPrimeFactors(num) {
  if (!num) return [];
  
  let primeFactors = [];
  let divisor = 2;
  
  function checkIfPrimeFactor(x, y) {
    // Starting with 2, if a number evenly factors into `num`, recurse over it
    if (isDivisible(x, y)) {
      x = x/y;
      primeFactors.push(y);
      checkIfPrimeFactor(x, y);
    } else if (x > y) {
      // While the divisor is less than `num`, increment the divisor until it hits another factor or is larger than `num`
      y += 1;
      checkIfPrimeFactor(x, y);
    } else {
      // Return whatever is in the `primeFactors` array
      return primeFactors;
    }
  }
  
  checkIfPrimeFactor(num, divisor);
}


function isDivisible(num, divisor) {
  return num % divisor === 0;
}


function isPrime(num) {
  if (!num || num === 1) return false;
  
  // A number is prime if it is only divisible by 1 and itself, i.e. only has two factors
  let factors = getFactors(num, true);
  return factors.length === 2;
}


module.exports = {
  deduplicate: deduplicate,
  factorial: factorial,
  getFactors: getFactors,
  getPrimeFactors: getPrimeFactors,
  isDivisible: isDivisible,
  isPrime: isPrime,
}