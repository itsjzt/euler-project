function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function immutableSwap(items, firstIndex, secondIndex) {
  const results = items.slice();
  const firstItem = items[firstIndex];
  results[firstIndex] = items[secondIndex];
  results[secondIndex] = firstItem;

  return results;
}

function numberToSwap(numArr) {
  // iterate in reverse order
  // because it will increment the list Lexicographic
  for (let i = numArr.length - 1; i >= 0; i++) {
    let num = numArr[i];
    // iterate over the list and find the number
    // whose right side is bigger than it
    // because it can be replaced to get a bigger number

    let indexToSwap =
      numArr.slice(0, i).length -
      1 -
      numArr
        .slice(0, i)
        .reverse()
        .findIndex((nextNum) => num > nextNum);
    if (indexToSwap !== -1) {
      return [i, indexToSwap];
    }
  }
  return null;
}

// lets make it work then optimize
function permute(numArr) {
  const permutations = factorial(numArr.length);
  // we already have first permutation
  console.log(numArr);
  for (let i = 1, lastNumArr = numArr; i <= permutations; i++) {
    let indexes = numberToSwap(lastNumArr);

    if (indexes === null) {
      return i;
    }
    let [first, second] = indexes;
    lastNumArr = immutableSwap(lastNumArr, first, second);
    console.log(lastNumArr);
  }
}

permute([1, 2, 3, 4]);

function main() {}
