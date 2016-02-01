/* ------
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
------ */

var primes = [2, 3, 5, 7];
var i = 9;

function isPrime(num) {
  var max = Math.sqrt(num);

  // Only check if the number is divisible by primes, and only up to the square root
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] > max) break;
    if (num % primes[i] === 0) return false
  }

  return true;
}

while (i < 1999998) {
  i += 2; // start with i = 11
  if (i % 5 === 0) continue;
  if (isPrime(i)) primes.push(i);
}

var answer = primes.reduce(function(a, b) { return a + b; });
console.log(answer);
