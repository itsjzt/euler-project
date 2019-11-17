function checkPrime(number) {
	let isPrime = true
	let rootOfNumber = Math.sqrt(number) 
	
	for (let i = 2; i <= rootOfNumber; i++) {
		if (number % i === 0) isPrime = false				
	}
	
	return isPrime
}

function main(primesBelow) {
	let primes = []
	let i = 1 

	while (true) {
		i++
		// pre-mature optimization
		if (i !== 2 && i % 2 === 0) continue
		else if (i !== 3 && i % 3 === 0) continue
		else if (i !== 5 && i % 5 === 0) continue
		else if (i !== 7 && i % 7 === 0) continue
		else if (checkPrime(i)) {
			if (i > primesBelow) break
			primes.push(i)
		}
	}

	return primes.reduce((sum, n) => sum += n,0)
}

console.log(main(2000000))
