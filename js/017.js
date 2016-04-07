/* -----
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
----- */

'use strict';

let unique = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

let tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
};

// For simplicity's sake, all words are globbed onto this variable, without spaces, commas, or dashes
let answer = '';

for (let i = 1; i < 1001; i++) {
  if (i < 100) {
    answer += getTwoDigits(i);
  } else if (i < 1000) {
    answer += getThreeDigits(i);
  } else {
    answer += 'onethousand';
  }
}

function getTwoDigits(num) {
  // Cast the number to a string so that it can be manipulated
  let nums = (''+num).split('');
  
  // If the number is represented by a unique word (i.e. between 1 and 19), then just return it
  if (num in unique) {
    return unique[num];
  } else if (num % 10 > 0) {
    // If there are non-zero digits in the ones place (i.e. the number is not divisible by ten),
    // we need to return two concatenated values (e.g. "twenty" and "one")
    return tens[nums[0]] + unique[nums[1]];
  } else {
    // Otherwise, the number is divisible by ten,
    // which means we only need to return the word representing the tens place (e.g. "twenty")
    return tens[nums[0]];
  }
}

function getThreeDigits(num) {
  let nums = (''+num).split('');

  // Get the first digit, which represents the hundreds place
  let first = nums.shift();
  let value = unique[first] + 'hundred';
  
  if (num % 100 > 0) {
    // If it's not a multiple of one hundred, include an "and" and call `getTwoDigits`
    value += 'and';
    
    // Bitshift the remaining string since `getTwoDigits` expects a numerical value
    value += getTwoDigits(+nums.join(''));
  }
  
  return value;
}

// Get the length of the resulting string
console.log(answer.length);