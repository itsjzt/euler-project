function main(number) {
	const factorialOfNumber = BigInt(factorial(number))
	console.log(factorialOfNumber)
	return factorialOfNumber
		.toString()
		.split("")
		.map(n => Number(n))
		.reduce( (sum, n) => sum += n ,0)
}

function factorial(n) {
	let _factorial = 1n
	// don't mutate args
	let i = n + 1
	while (i-- > 1) {
		_factorial *= BigInt(i)	
	}
	return _factorial
}

console.log(main(process.argv[2] || 100))
