function pow(_base, _redix) {
  let result = BigInt(1);
  let base = BigInt(_base);
  let redix = BigInt(_redix);
  for (let i = 0; i < redix; i++) {
    result = result * base;
  }
  return result;
}

function givePowers(n, upto) {
  if (upto < 2) return [];

  let powers = [];
  for (let i = 2; i <= upto; i++) {
    powers.push(pow(n, i));
  }

  return powers;
}

function countUniquePowers(start, end) {
  let powers = new Set([]);
  for (let i = start; i <= end; i++) {
    const newPowers = givePowers(i, end);
    newPowers.forEach((n) => {
      if (powers.has(n)) return;
      powers.add(n);
    });
  }

  return powers.size;
}

console.log(countUniquePowers(2, 100));
