function firstMissingPositive(nums) {
  let max = 1;
  const record = {};

  nums.forEach(t => {
    max = t > max ? t : max;
    record[t] = true;
  });

  for (let i = 1; i < max; i++) {
    if (!record[i]) return i;
  }
}

export default function test() {
  [
    [1, 2, 0],
    [3, 4, -1, 1],
    [7, 8, 9, 11, 12],
  ].forEach(arr => console.info(firstMissingPositive(arr)));
}
