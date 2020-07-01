function main() {
  const allNumbers = Array(1000)
    .fill(null)
    .map((_, index) => index);
  const multiples = allNumbers.filter((n) => n % 3 === 0 || n % 5 === 0);
  return multiples.reduce((sum, num) => (sum += num), 0);
}

module.exports = main;
