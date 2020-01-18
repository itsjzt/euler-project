function main(number) {
	const LCM = 1
	for (let i = 2; i <= number; i++) {
		getFactors(i)
			.filter(n => LCM % n !== 0)
			.forEach(n => LCM * n)
	}

	return LCM
}

function getFactors(number) {
  // factors start from 2
	let divisor = 2
  let factors = [];

	while (number !== 1) {
		if (number % divisor === 0) {
      number = number / divisor;
      factors.push(divisor);
		} 
		else {
			divisor++
		} 
  }

  return factors;
}

console.log(main(10))
