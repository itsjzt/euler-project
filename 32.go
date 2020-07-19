package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	pandigits := findPandigitProducts(1, 2000);
	sum := 0
	for i := 0; i < len(pandigits); i++ {
		pandigit := pandigits[i]
		sum += pandigit.product
	}
	fmt.Printf("%d \n", sum)
}

type pandigit struct {
	a int
	b int
	product int
}

func findPandigitProducts(start, end int) []pandigit {

	pandigits := make([]pandigit, 0);
	
	for i := start; i < end; i++ {
		for j := start; j < end; j++ {
			value := i * j;
		
			if checkPandigit(i, j, value) {
				newPandigit := pandigit{ a: i, b: j,product: value }
				if !checkPandigitExists(pandigits, newPandigit) {
					pandigits = append(pandigits, newPandigit)
				}
			}
		}
	}

	return pandigits
}

func checkPandigitExists(pandigits []pandigit, newPandigit pandigit) bool {
	for i := 0; i < len(pandigits); i++ {
		element := pandigits[i]
		if element.product == newPandigit.product {
			if element.a == newPandigit.b && element.b == newPandigit.a {
				return true
			}
		}
	}
	return false
}

func checkPandigit(i, j, value int) bool {
	iStr := strconv.Itoa(i)
	jStr := strconv.Itoa(j)
	valueStr := strconv.Itoa(value)

	allStr := iStr + jStr + valueStr

	if len(allStr) > 9 {
		return false
	}

	for i := 1; i < 10; i++ {
		digitStr := strconv.Itoa(i)
		allStrCountOfThisDigit := strings.Count(allStr, digitStr)
		if allStrCountOfThisDigit != 1 {
			// fmt.Printf("%d %s %s \n", allStrCountOfThisDigit, digitStr, allStr)
			return false
		}
	}

	return true
}