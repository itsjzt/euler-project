function checkPrime(number) {
  let isPrime = true;
  let halfOfNumber = number / 2;

  for (let i = 2; i <= halfOfNumber; i++) {
    if (number % i === 0) isPrime = false;
  }

  return isPrime;
}

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
