function isPythagorianTriplet(a, b) {
  const aSquare = Math.pow(a, 2);
  const bSquare = Math.pow(b, 2);
  const c = Math.sqrt(aSquare + bSquare);
  const isTriplet = Number.isInteger(c);

  if (isTriplet) {
    return [a, b, c];
  }
  return false;
}

function sumIs1000(a, b, c) {
  return a + b + c === 1000;
}

function findTripletsInRange(from, to) {
  let triplets = [];
  let i = from;
  while (i++ <= to) {
    let j = from;
    while (j++ <= to) {
      const triplet = isPythagorianTriplet(i, j);
      if (triplet) {
        triplets.push(triplet);
      }
    }
  }
  return triplets;
}

function main() {
  return findTripletsInRange(1, 1000)
    .find((triplet) => sumIs1000(...triplet))
    .reduce((acc, n) => acc * n, 1);
}

module.exports = main;
