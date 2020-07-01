// https://projecteuler.net/problem=5

function getFactors(number) {
  // factors start from 2
  let divisor = 2;
  let factors = [];

  while (number !== 1) {
    if (number % divisor === 0) {
      number = number / divisor;
      factors.push(divisor);
    } else {
      divisor++;
    }
  }

  return factors;
}

function main() {
  let allFactors = [];
  for (let i = 2; i <= 20; i++) {
    allFactors.push(...getFactors(i));
  }

  return allFactors.reduce((sum, i) => (sum *= i), 1);
}

module.exports = main;
