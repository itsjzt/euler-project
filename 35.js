// const permutator = require("./lib/permutator");
const checkPrime = require("./lib/checkPrime");

function swap(arr, firstIndex, secondIndex) {
  const clone = arr.slice();
  let temp = clone[firstIndex];
  clone[firstIndex] = clone[secondIndex];
  clone[secondIndex] = temp;
  return clone;
}

function allDigitSwaps(num) {
  let digits = Array.from(num.toString());
  let numberSwaps = [];
  for (let i = 0; i < digits.length; i++) {
    let newNumber = swap(digits, 1, i);
    numberSwaps.push(Number(newNumber.join("")));
  }

  return numberSwaps;
}

function main(upto, start = 2) {
  let circularPrimes = new Set();
  for (let i = start; i < upto; i++) {
    if (!checkPrime(i)) {
      continue;
    }

    let isAlreadyInList = circularPrimes.has(i);

    if (isAlreadyInList) {
      continue;
    }

    let [_sameNumber, ...otherPermutations] = allDigitSwaps(i);
    if (otherPermutations.every((n) => checkPrime(n))) {
      circularPrimes.add(_sameNumber);
      otherPermutations.forEach((op) => circularPrimes.add(op));
    }
  }

  return circularPrimes;
}

console.log(main(1000).size);
