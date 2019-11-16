function main(range) {
				const allNumbers = Array(range).fill(null).map((_, index) => index)
				const multiples = allNumbers.filter(n => n % 3 === 0 || n % 5 === 0)
				// console.log(multiples)
				return multiples.reduce( (sum, num) => sum += num, 0)
}	

console.log(main(1000))
