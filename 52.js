function main(from = 0, to = 100, multipleContainSameDigitTimes = 2) {
  const times = multipleContainSameDigitTimes;
  let number = from;
  while (number < to) {
    let countedTimes = 0;
    const numberInto2 = (number * 2).toString();
    if (haveSameCharacters(numberInto2, number.toString())) {
    }

    number++;
  }

  return;
}

function haveSameCharacters(firstStr = "", secondStr = "") {
  const firstStrArr = firstStr.split("");
  let i = 0;
  while (i < firstStr.length) {
    const char = firstStrArr[i];
    if (secondStr.indexOf(char) < 0) {
      return false;
    }
  }

  return true;
}

const test1 = haveSameCharacters("hello", "hola");
const test2 = haveSameCharacters("hello", "lolle");
const test3 = haveSameCharacters("thisalksadj ", " ");
