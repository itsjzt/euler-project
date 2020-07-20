const permutator = require("./lib/permutator");

function main() {
  const result = permutator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])[1000000 - 1].join(
    ""
  );
  return Number(result);
}

module.exports = main;
