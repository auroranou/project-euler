/* -----
Consider the divisors of 30: 1,2,3,5,6,10,15,30.
It can be seen that for every divisor d of 30, d + 30/d is prime.

Find the sum of all positive integers n not exceeding 100,000,000
such that for every divisor d of n, d + n/d is prime.
----- */

'use strict';

let utils = require('./utils.js');
let sum = 0;

// Only check even numbers because [1, n] will always be a factor pair and one
// plus an odd number is always even, i.e. not prime
for (let n = 10000000; n > 0; n -= 2) {
  if (allDivisorsPrime(n)) {
    sum += n;
  }
}

function allDivisorsPrime(num) {
  let d = 1;

  // When d === num/d, we've hit the square root, and when d > num/d, we've looped
  // through unique factor pairs once, so we can exit.
  while (d < num/d) {
    
    if (num % d === 0) {
      // If d + num/d is not prime, then num doesn't fulfill the requirements for
      // this problem, so return false immediately and continue on to the next number
      if (!utils.isPrimeBeta(d + num/d)) {
        return false;
      }
    }
    
    d += 1;
  }
  
  // If we get to this point, d + num/d is prime in all cases
  return true;
}

// 1 is rejected by isPrimeBeta, so just add it in here
console.log(sum + 1);
