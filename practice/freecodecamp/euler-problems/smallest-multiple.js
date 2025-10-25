/*
Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
  const numbers = []
  for (let i = 1; i <= n; i++) {
    numbers.push(i)
  }
  const numbersCheck = new Array(n).fill(0);
  let smallestMultiple = 0;
  let count = 1;
  while (smallestMultiple <= 0) {
    for (const [index, num] of numbers.entries()) {
      if (count % num === 0) {
        numbersCheck[index] = 1
      } else {
        continue;
      }
    }
    if (numbersCheck.every(number => number === 1)) {
      smallestMultiple = count;
      return smallestMultiple
    } else {
      numbersCheck.fill(0)
      count++
    }
  }

  return smallestMultiple;
}

console.log(smallestMult(5));

// More efficient

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMult(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
