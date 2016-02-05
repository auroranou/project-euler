/* ------
The following iterative sequence is defined for the set of positive integers:
  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
------ */

function isEven(num) { return num % 2 === 0; };
function handleEven(num) { return num / 2; };
function handleOdd(num) { return num * 3 + 1; };

function getCount(num) {
  var count = 0;
  while (num > 1) {
    var nextNum = isEven(num) ? handleEven(num) : handleOdd(num);
    num = nextNum;
    count += 1;
  }
  return count;
}

function getCounts() {
  var largest = { num: 0, count: 0 };
  
  // gamble that the answer is probably bigger than 100,000 and odd
  for (var i = 100001; i < 1000000; i += 2) {
    var count = getCount(i);
    if (count > largest.count) {
      largest.count = count;
      largest.num = i;
    }
  }
  return largest;
}

console.log(getCounts());