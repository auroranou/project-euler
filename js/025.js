/* -----
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
------*/

'use strict';

function addArrays(prev, curr, iteration) {
  let next = [];
  let carryOne = false;

  if (curr.length === 1000) {
    console.log(iteration); // answer
    // This is the value of first Fibonacci sequence to contain 1000 digits:
    // console.log(curr.reverse().join(''));
    return;
  }

  for (let i = 0; i < curr.length; i++) {
    let sum = curr[i];

    if (prev[i]) sum += prev[i];
    if (carryOne) sum += 1;
    
    if (sum >= 10) {
      carryOne = true;
      next.push(+(''+sum).charAt(1));
    } else {
      carryOne = false;
      next.push(sum);
    }
  }
  
  if (carryOne) next.push(1);
  
  iteration += 1;

  return addArrays(curr, next, iteration);
}

addArrays([1], [1], 2);