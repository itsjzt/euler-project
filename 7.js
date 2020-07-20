const checkPrime = require("./lib/checkPrime");

function main() {
  let primes = [];
  let i = 1;
  let place = 10001;

  while (primes.length !== place) {
    i++;
    // pre-mature optimization
    if (i !== 2 && i % 2 === 0) continue;
    else if (i !== 3 && i % 3 === 0) continue;
    else if (i !== 5 && i % 5 === 0) continue;
    else if (i !== 7 && i % 7 === 0) continue;
    else if (checkPrime(i)) {
      primes.push(i);
    }
  }

  return primes[primes.length - 1];
}

module.exports = main;
