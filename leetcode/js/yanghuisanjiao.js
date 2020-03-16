function inner(numRows) {
  if (numRows === 0) return [1];

  if (numRows === 1) return [1, 1];


  let base = [1, 1];
  let row = [];
  for (let i = 3; i <= numRows + 1; i++) {
    row = [];
    for (let j = 0; j < i; j++) row[j] = j === 0 || j === i - 1 ? 1 : base[j - 1] + base[j];

    base = row;
  }
  return row;
}

function generate(numRows) {
  const ret = [];
  for (let i = 0; i <= numRows; i++) ret.push(inner(i));

  return ret;
}

console.info(generate(3));
