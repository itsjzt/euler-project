const checkPrime = require("./lib/checkPrime");

function main() {
  let primes = [];
  let i = 1;
  let primesBelow = 2000000;

  while (true) {
    i++;
    // pre-mature optimization
    if (i !== 2 && i % 2 === 0) continue;
    else if (i !== 3 && i % 3 === 0) continue;
    else if (i !== 5 && i % 5 === 0) continue;
    else if (i !== 7 && i % 7 === 0) continue;
    else if (checkPrime(i)) {
      if (i > primesBelow) break;
      primes.push(i);
    }
  }

  return primes.reduce((sum, n) => (sum += n), 0);
}

module.exports = main;
