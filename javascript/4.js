function isPalindrome(number) {
	const reverseOfNumber = parseInt(number.toString().split("").reverse().join("")) 
	return reverseOfNumber === number

}

function main() {
	let firstNum = undefined
	let secondNum = undefined
	let product = []
	
	for (firstNum = 999; firstNum >= 900; firstNum--) {
		for (secondNum = 999; secondNum >= 900; secondNum--) {
			if(isPalindrome(firstNum * secondNum)) {
				product.push(firstNum * secondNum)
			}
		}
	}	

	return product.reduce((largest, n) => n > largest ? n : largest, 0)
}

console.log(main())
