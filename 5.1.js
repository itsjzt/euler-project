function getHCF(...numbers) {
	const smallestNumber = numbers.reduce((smallest, n) => n < smallest ? n : smallest, numbers[0])
	let hcf = 0

	for (let i = 2; i <= smallestNumber; i++) {
		let areDivisible = numbers.map(n => n % i === 0).includes(false) ? false : true
		if (areDivisible) {
			hcf = i
		}
	}

	return hcf
}

function getProduct(...numbers) {
	return numbers.reduce((product, n) => product *= n, 1)
}

function getLCM(...numbers) {
	const hcf = getHCF(...numbers)
	const product = getProduct(...numbers)

	return product / hcf
}

console.log(getLCM(32, 16, 8))
