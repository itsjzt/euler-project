const permutator = (inputArr) => {
  let result = [];
  let i = 1;

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      if (i === 1000000) {
        result = m;
      }
      i++;
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

function main() {
  const result = permutator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).join("");
  return Number(result);
}

module.exports = main;
