function isPalindrome(number) {
	const reverseOfNumber = parseInt(number.toString().split("").reverse().join("")) 
	return reverseOfNumber === number

}

function main(start = 999, chunkSize = 100) {
	let firstNum = undefined
	let secondNum = undefined
	let products = []
	
	for (firstNum = start; firstNum >= start - chunkSize; firstNum--) {
		for (secondNum = start; secondNum >= chunkSize; secondNum--) {
			if(isPalindrome(firstNum * secondNum)) {
				products.push(firstNum * secondNum)
			}
		}
	}	

	if (products.length) {
		return products.reduce((largest, n) => n > largest ? n : largest, 0)
	} 
	else {
		return main(start - chunkSize, chunkSize) 
	}
}

console.log(main())
