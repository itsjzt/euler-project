var Decimal = require("decimal.js");

function checkOffsetBasedRepeat(postDecimal) {
  const length = postDecimal.length;
  for (i = 0; i < length; i++) {
    const basicRepeat = checkBasicRepeat(postDecimal.slice(i + 1));
    if (basicRepeat) {
      return basicRepeat;
    }
  }
}

function convertArrayInParts(arr, n) {
  const length = arr.length;
  const iterations = Math.floor(arr.length / n);

  let parts = [];
  for (let i = 0; i < iterations; i++) {
    let startIndex = i * n;
    let endIndex = i * n + n;

    let part = arr.slice(startIndex, endIndex);
    parts.push(part);
  }
  return parts;
}

function isArrayEqual(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) return false;
  if (firstArr.length === 0) return false;
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }

  return true;
}

function checkBasicRepeat(postDecimal) {
  if (postDecimal.length < 2) return;

  for (let i = 0; i < postDecimal.length; i++) {
    let length = i + 1;
    let postDecimalSubsets = convertArrayInParts(postDecimal, length);
    if (postDecimalSubsets.length < 2) return;
    let firstSubset = postDecimalSubsets[0];
    let AreAllSubsetNotSame = postDecimalSubsets
      .map((subset) => isArrayEqual(firstSubset, subset))
      .findIndex((n) => n === false);

    if (AreAllSubsetNotSame === -1) {
      return length;
    }
  }
}

function solve(floatingResult) {
  const [preDecimal, _postDecimal] = floatingResult.toString().split(".");
  const postDecimal = _postDecimal.split("");

  const isBasicRepeat = checkBasicRepeat(postDecimal);
  const isCheckOffsetBasedRepeat = checkOffsetBasedRepeat(postDecimal);

  return isBasicRepeat || isCheckOffsetBasedRepeat;
  //   check for most basic repeat ex: 3333333, 111111
}

console.log(solve(1 / 4));
console.log(solve(1 / 9));
console.log(solve(1 / 3));
console.log(solve(1 / 6));
console.log(solve(1 / 13));
console.log(solve(1 / 11));
console.log(solve(1 / 7));
console.log(solve(1 / 17));
