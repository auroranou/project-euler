/* ------
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
------ */

// A number is prime if it can only be divided by 1 and itself
// To find prime factors, loop through up to square root
  // Save primes to an array, use those values to check against

var primes = [2, 3, 5, 7];
var i = 9;

function isPrime(num) {
  var max = Math.sqrt(num);

  for (var i = 0; i < primes.length; i++) {
    if (primes[i] > max) break;
    if (num % primes[i] === 0) return false
  }

  return true;
}

while (i < 1999998) {
  i += 2;
  if (i % 5 === 0) continue;
  if (isPrime(i)) primes.push(i);
}

var answer = primes.reduce(function(a, b) { return a + b; });
console.log(answer);
