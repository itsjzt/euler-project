function fib(range) {
				let fibonacci = [1, 2]
				
				while (true) {
								const nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
								if (nextNumber  >= range) break;
								else fibonacci.push(nextNumber)
				}

				return fibonacci
}

function filterEven(numbers) {
				return numbers.filter(number => number % 2 === 0)
}

function sum(numbers) {
				return numbers.reduce((sum, number) => sum += number, 0)
}

function main(fibRange) {
				return sum(filterEven(fib(fibRange)))
}


console.log(main(4000000))
