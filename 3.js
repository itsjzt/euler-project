const checkPrime = require("./lib/checkPrime");

function getNumbers(range) {
  return Array(range)
    .fill(null)
    .map((_, i) => i);
}

function findFactors(number) {
  const rootOfNumber = parseInt(Math.sqrt(number));
  return getNumbers(rootOfNumber)
    .filter((n) => number % n === 0)
    .filter(checkPrime)
    .reduce((largest, factor) => (factor > largest ? factor : largest), 0);
}

function main() {
  return findFactors(600851475143);
}

module.exports = main;
