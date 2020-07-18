package main

import (
	"fmt"
	"math"
)

func main() {
	for i := 0; i <= 41; i++ {
		result := primeEq(float64(i))
		isPrime := checkPrime(int(result))

		fmt.Printf("index: %d; isPrime: %t; result: %.0f \n", i,  isPrime, result)
	}
}

func primeEq(n float64) float64 {
	return math.Pow(n, 2) + n + 41 
}

func checkPrime(n int) bool {
	for i := 2; int(math.Pow(float64(i), 2)) < n; i++ {
		if n / i == 0 {
			return false
		}
	}

	return true
}


