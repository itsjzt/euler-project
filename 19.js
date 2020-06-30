// ex: isLeapYear(2000) -> true
// isLeapYear(1937) -> false
function checkIsLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// ex: firstDayOfMonth("wednesday", 31) -> "t"
function firstDayOfMonth(startingDayLastMonth, lastMonthDaysCount) {
  const dayOffset = Math.ceil(lastMonthDaysCount % 7);
  const dayToInt = days.indexOf(startingDayLastMonth);
  let firstDayInNumber = dayToInt + dayOffset;
  if (firstDayInNumber >= 7) {
    firstDayInNumber = firstDayInNumber % 7;
  }
  return days[firstDayInNumber];
}

let sundaysOn1st = 0;
for (let year = 1901, firstDayOfYear = "monday"; year < 2000; year++) {
  let isLeapYear = checkIsLeapYear(year);

  let firstDayOfJan = firstDayOfYear;
  let firstDayOfFeb = firstDayOfMonth(firstDayOfJan, 31);
  let firstDayOfMar = firstDayOfMonth(firstDayOfFeb, isLeapYear ? 29 : 28);
  let firstDayOfApr = firstDayOfMonth(firstDayOfMar, 31);
  let firstDayOfMay = firstDayOfMonth(firstDayOfApr, 30);
  let firstDayOfJun = firstDayOfMonth(firstDayOfMay, 31);
  let firstDayOfJul = firstDayOfMonth(firstDayOfJun, 30);
  let firstDayOfAug = firstDayOfMonth(firstDayOfJul, 31);
  let firstDayOfSep = firstDayOfMonth(firstDayOfAug, 31);
  let firstDayOfOct = firstDayOfMonth(firstDayOfSep, 30);
  let firstDayOfNov = firstDayOfMonth(firstDayOfOct, 31);
  let firstDayOfDec = firstDayOfMonth(firstDayOfNov, 30);

  sundaysOn1st += [
    firstDayOfJan,
    firstDayOfFeb,
    firstDayOfMar,
    firstDayOfApr,
    firstDayOfMay,
    firstDayOfJun,
    firstDayOfJul,
    firstDayOfAug,
    firstDayOfSep,
    firstDayOfOct,
    firstDayOfNov,
    firstDayOfDec,
  ].filter((day) => day === "sunday").length;

  firstDayOfYear = firstDayOfMonth(firstDayOfDec, 31);
}

console.log("sundaysOn1st", sundaysOn1st);
