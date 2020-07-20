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

module.exports = checkPrime;
