const readline = require("readline");
const fs = require("fs");
const path = require("path");

// make a language that will suit the problem
String.prototype.charValues = function cv() {
  return this.split("").map((char) => {
    const charCodeStarting = 64;
    const charCode = char.toUpperCase().charCodeAt(0);
    return charCode - charCodeStarting;
  });
};

Array.prototype.sum = function sm() {
  return this.reduce((acc, n) => Number(n) + acc, 0);
};

const filePath = path.join(__dirname, "p022_names_sorted.txt");
const fileReadStream = readline.createInterface({
  input: fs.createReadStream(filePath),
});

let lineCount = 1;
let nameScores = 0;

fileReadStream.on("line", (line) => {
  const name = line.trim().replace(/"/gim, "").replace(/,/, "");
  const scoreBeforeLineProduct = name.charValues().sum();
  const score = scoreBeforeLineProduct * lineCount;

  nameScores += score;
  lineCount += 1;
});

fileReadStream.on("close", () => {
  console.log(nameScores);
});
