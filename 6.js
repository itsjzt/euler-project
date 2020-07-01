function main() {
  const number = 100;
  const sumOfSquare = Array(number)
    .fill(null)
    .map((_, i) => i + 1)
    .map((n) => n ** 2)
    .reduce((sum, n) => (sum += n), 0);
  const squareOfSum =
    Array(number)
      .fill(null)
      .map((_, i) => i + 1)
      .reduce((sum, n) => (sum += n), 0) ** 2;

  return squareOfSum - sumOfSquare;
}

module.exports = main;
