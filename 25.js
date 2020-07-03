function* genFib(till) {
  let lastFib = 1;
  let secondLastFib = 1;
  yield 1;
  yield 1;

  while (true) {
    let nextFib = lastFib + secondLastFib;
    if (nextFib > till) break;
    secondLastFib = lastFib;
    lastFib = nextFib;
    yield nextFib;
  }
}

const it = genFib(10);
