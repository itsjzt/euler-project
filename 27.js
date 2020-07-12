function checkPrime(number) {
  let rootOfNumber = Math.sqrt(number);

  for (let i = 2; i <= rootOfNumber; i++) {
    if (number % i === 0) {
        return false
    }
  }

  return true;
}

function getConsecutivePrimes(a, b) {
    for (let i = 0; true; i++) {
        let number = i * i + a * i + b    
    }
}