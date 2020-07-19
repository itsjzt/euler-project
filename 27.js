function checkPrime(number) {
  if (number <= 1) return false;
  let rootOfNumber = Math.sqrt(number);

  for (let i = 2; i <= rootOfNumber; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function quadraticPrimeEq(n, a, b) {
  return n * n + a * n + b;
}

function primesInEquation(a, b) {
  for (let i = 0; true; i++) {
    let value = quadraticPrimeEq(i, a, b);
    if (checkPrime(value)) {
      continue;
    }
    return i;
  }
}

function getMostPrimeCoefficients({ start, end }) {
  let highest = { a: 0, b: 0, primes: 0 };

  for (let a = start; a < end; a++) {
    for (let b = start; b < end; b++) {
      primes = primesInEquation(a, b);
      if (primes >= highest.primes) {
        highest = { a, b, primes };
      }
    }
  }

  return highest;
}

const { a, b } = getMostPrimeCoefficients({ start: -1000, end: 1000 });
console.log(a * b);
