function findFactors(number) {
  let factors = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

// best practice is not always a best way
Array.prototype.sum = function () {
  return this.reduce((acc, f) => acc + f, 0);
};

function main() {
  let amicables = [];
  for (let i = 1; i < 10000; i++) {
    let factorsSum = findFactors(i).sum();
    let factorSumOfFactorSum = findFactors(factorsSum).sum();

    // if the pair it recursive (sum of factors of n gives back n)
    // then I don't want
    if (factorsSum === factorSumOfFactorSum) {
      continue;
    }

    if (i === factorSumOfFactorSum) {
      amicables.push(i);
    }
  }
  return amicables;
}

console.log("SUM: ", main().sum());
