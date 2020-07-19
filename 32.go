package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	pandigits := findPandigitProducts(10, 1000)
	sum := 0
	for i := 0; i < len(pandigits); i++ {
		pandigit := pandigits[i]
		fmt.Printf("%+v \n", pandigit)
		sum += pandigit.product
	}
	fmt.Printf("%d \n", sum)
}

type pandigit struct {
	a int
	b int
	product int
}

func findPandigitProducts(start, ending int) []pandigit {
	half := int(ending / 2);
	pandigits := make([]pandigit, 0);
	
	for i := start; i < half; i++ {
		for j := half; j < ending; j++ {
			value := i * j;
			if containsAllPandigits(i, j, value) {
				newPandigit := pandigit{ a: i, b: j,product: value }
				pandigits = append(pandigits, newPandigit)
			}
		}
	}

	return pandigits
}

func containsAllPandigits(i, j, value int) bool {
	iStr := strconv.Itoa(i)
	jStr := strconv.Itoa(j)
	valueStr := strconv.Itoa(value)

	allStr := iStr + jStr + valueStr

	for i := 1; i < 10; i++ {
		digitStr := strconv.Itoa(i)
		allStrCountOfThisDigit := strings.Count(allStr, digitStr)
		if allStrCountOfThisDigit != 1 {
			fmt.Printf("%d %s %s \n", allStrCountOfThisDigit, digitStr, allStr)
			return false
		}
	}

	return true
}