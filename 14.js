function collatzSequence(number) {
	let iterations = 0
	while (number >= 10) {
		iterations++
		if (number % 2 === 0) {
			number = number / 2	
		} else {
			number = 3 * number + 1
		}
	}
	return iterations
}

function main() {
	let highest = { number: 0, iteration: 0 }
	for (let i = 1000000; i >= 50000 /* LOL */; i -= 2 /* even number don't have very long chain */) {
		const iteration = collatzSequence(i)
		if (iteration > highest.iteration) {
			highest = {
				number: i,
				iteration
			}	
		}
	}

	return highest
}

console.log(main())
