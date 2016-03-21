/* ------
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
------ */

// Based on Euclid's theorem of Pythagorean triplets:
  // a = m^2 - n^2
  // b = 2mn
  // c = m^2 + n^2

// This means 2(m^2) + 2mn = 1000 or m(m + n) = 500

function getMN() {
  // First solve for possible m, n pairs
  var mnPairs = [];

  // Assuming n = 0, the largest m can be is the square root of 500
  var max = parseInt(Math.sqrt(500));

  for (var m = 0; m < max; m++) {
    // Find all possible n values that are whole numbers
    if (Number.isInteger(500/m)) {
      var n = 500/m - m;
      mnPairs.push([m, n]);
    }
  }

  return mnPairs;
}

function getABC(pair) {
  var m = pair[0];
  var n = pair[1];

  // Create a, b, c triplet; discard any that involve negative numbers
  var a = (m * m) - (n * n);
  if (a < 0) return false;

  var b = 2 * m * n;
  var c = (m * m) + (n * n);

  // We already know that a, b, c will sum to 1000 based on m, n, but need to verify that it's a Pythagorean triplet
  if (a * a + b * b === c * c) return [a, b, c];
  else return false;
}

function calcABC() {
  var pairs = getMN();
  var triplet = pairs.map(getABC)
    .filter(function(x) { return x; }) // filter out falses
    .reduce(function(x, y) { return x.concat(y); }); // flatten array

  // Find final product of a * b * c
  var answer = triplet.reduce(function(x, y) { return x * y });
  console.log(answer);
}

calcABC();
