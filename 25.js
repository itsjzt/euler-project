function solve() {
  // use big ints
  // since number are gonna to get large, very large, very quickly
  let prevSeries = [1n, 1n];
  while (true) {
    let [last, secondLast] = prevSeries;
    let next = last + secondLast;

    if (next.toString().length >= 1000) {
      return prevSeries.length + 1;
    }
    prevSeries = [next, ...prevSeries];
  }
}

console.log(solve());

module.exports = solve;
