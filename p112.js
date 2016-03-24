/* -----
Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.

Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.

We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.

Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.

Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.

Find the least number for which the proportion of bouncy numbers is exactly 99%.
----- */

'use strict';

// Based on the given data, find the counts of bouncy and non-bouncy numbers at 21780.
// These are incremented as we assess larger numbers
let num = 21780;
let bouncyCount = num * 0.9;
let nonBouncyCount = num - bouncyCount;

function isBouncy(number) {
  let ascending = false;
  let descending = false;
  let str = ''+number;
  
  for (var i = 0; i < str.length; i++) {
    // If the number contains ascending and descending patterns, it is bouncy
    // and we can break out of the loop early
    if (ascending && descending) {
      return true;
    } else if (str[i] - str[i+1] < 0) {
      descending = true;
    } else if (str[i] - str[i+1] > 0) {
      ascending = true;
    }
  }
  
  return false;
}

// While the percentage of bouncy numbers is less than 99%, check each number and
// increment bouncy and non-bouncy counts accordingly
while (bouncyCount / num < 0.99) {
  if (isBouncy(num)) bouncyCount += 1;
  else nonBouncyCount += 1;

  num += 1;
}

console.log(num);

// Run time: 0.971 seconds