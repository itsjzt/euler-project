function getFactorial(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
}

function sumNumbers(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      sum += sumNumbers(...element);
    } else {
      sum += Number(element);
    }
  }
  return sum;
}

function isDigitFactotial(num) {
  const digits = num.toString().split("");
  const digitFactorial = digits.map(getFactorial);
  const digitFactorialSum = sumNumbers(digitFactorial);

  return digitFactorialSum === num;
}

let digitFactorials = new Set();

for (let i = 10; i < Number.MAX_SAFE_INTEGER; i++) {
  if (isDigitFactotial(i)) {
    console.log(i);
    digitFactorials.add(i);
  }
}

console.log(digitFactorials);
