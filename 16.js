function main(number, power) {
	let exponentValue = 1n

	let i = 0;
	while (i++ < power) {
		exponentValue *= BigInt(number)
	}

	return exponentValue.toString()
	 .split("")
	 .reduce((acc, strNum) => acc + Number(strNum), 0)
}

console.log(main(2, process.argv[2]))
