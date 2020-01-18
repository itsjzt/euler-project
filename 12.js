function main(factorLength) {
	const triangleNumbers = []
	let i = 1
	
	while (true) {
		const newTriangleNumber = triangleNumbers.length ? triangleNumbers[triangleNumbers.length - 1] + i : i
		const factors = getFactors(newTriangleNumber)
		if(factors.length >= factorLength) {
			console.log(factors)
			return newTriangleNumber
		}
		triangleNumbers.push(newTriangleNumber)		
		i++
	}
}

function getFactors(number) {
  // factors start from 2
	let divisor = 2
  let factors = [];
	
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			factors.push(i)
		} 
	}

  return factors;
}

// console.log(main(process.argv[2]))
console.log(getFactors(process.argv[2]).length)
