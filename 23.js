const { set } = require("ramda");

function factors(n) {
  let factors = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function sum(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}

/**
 * Returns
 * -1 if Deficient
 * 0 if perfect
 * 1 if Abundant
 */
function isDeficientPerfectOrAbundant(n) {
  const factorSum = sum(factors(n));
  if (factorSum < n) {
    return -1;
  }
  if (factorSum > n) {
    return 1;
  }

  return 0;
}

let allAbdundantNumbers = [];
for (let i = 0; i < 28123; i++) {
  if (isDeficientPerfectOrAbundant(i) === 1) {
    allAbdundantNumbers.push(i);
  }
}

let sumOfAbundantNumbers = new Set();
for (let i = 0; i < allAbdundantNumbers.length; i++) {
  for (let j = 0; j < allAbdundantNumbers.length; j++) {
    let numberA = allAbdundantNumbers[i];
    let numberB = allAbdundantNumbers[j];
    let sum = numberA + numberB;
    sumOfAbundantNumbers.add(sum);
  }
}

let sumOfAllNonAbundantNumbers = 0;
for (let i = 0; i < 28123; i++) {
  if (sumOfAbundantNumbers.has(i)) {
    continue;
  }

  sumOfAllNonAbundantNumbers += i;
}

console.log("sumOfAllNonAbundantNumbers", sumOfAllNonAbundantNumbers);
