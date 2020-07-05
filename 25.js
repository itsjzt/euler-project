function solve() {
  // use big ints
  // since number are gonna to get large, very large, very quickly
  let prevSeries = [2n, 1n];
  for(let i = 1; true; i++) {
    let [last, secondLast] = prevSeries;
    let next = last + secondLast
    
    if (next.toString().length >= 1000) {
      return i
    }
    prevSeries = [next, ...prevSeries]
  }
}

module.exports = solve
