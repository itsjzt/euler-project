/**
 * ex: numberToPlaceValue(137) => [7, 3, 1]
 */
function numberToPlaceValue(number) {
  return number
    .toString()
    .split("")
    .reverse()
    .map((n) => Number(n));
}

function onesInWord(ones) {
  const words = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  return words[ones];
}

function tensInWord(_tens, ones) {
  const tensValue = _tens * 10;
  const words = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  if (_tens === 0 && ones === 0) {
    return "";
  }

  if (_tens === 0) {
    return onesInWord(ones);
  }

  //   if number is like 12, 19, 11
  if (tensValue >= 10 && tensValue <= 19) {
    return words[tensValue + ones];
  }

  //   if number is like 50, 30, 90
  if (ones === 0) {
    return words[tensValue];
  }

  return `${words[tensValue]} ${onesInWord(ones)}`;
}

function numberToWord(number = 0) {
  const placeValues = numberToPlaceValue(number);
  const [ones, tens, hundreds] = placeValues;

  if (number === 1000) {
    return `One Thousand`;
  }

  if (placeValues.length === 3) {
    return `${onesInWord(hundreds)} hundred ${
      tens !== 0 || ones !== 0 ? "and" : ""
    } ${tensInWord(tens, ones)}`;
  }

  if (placeValues.length === 2) {
    return tensInWord(tens, ones);
  }

  if (placeValues.length === 1) {
    return onesInWord(ones);
  }
}

function main() {
  return Array(1000)
    .fill(null)
    .map((_, i) => i + 1)
    .map((n) => numberToWord(n))
    .map((word) => word.replace(/\s+/gi, "").replace(/\-/gi, ""))
    .map((word) => word.trim().length)
    .reduce((acc, count) => acc + count, 0);
}

console.log(main());
