function main() {
  let arr = Array(20)
    .fill(null)
    .map((_, i) => i + 1);

  let lcmFactors = [];
  while (true) {
    // console.log(arr);
    if (arr.every((a) => a === 1)) {
      break;
    }

    for (let i = 1; i <= 20; i++) {
      let isLcmFactor = false;
      for (let j = 0; j < arr.length; j++) {
        const number = arr[j];
        if (number % i === 0) {
          arr[j] = number / i;
          isLcmFactor = true;
        }
      }
      if (isLcmFactor) {
        lcmFactors.push(i);
      }
    }
  }

  let lcm = 1;
  for (let z = 0; z < lcmFactors.length; z++) {
    lcm *= lcmFactors[z];
  }
  console.log({ lcm });
}

main();
