// https://leetcode-cn.com/problems/first-missing-positive/submissions/

function firstMissingPositive(nums) {
  let max = 1;
  const record = {};
  let noPositiveNumber = true;

  nums.forEach(t => {
    if (t > 0) noPositiveNumber = false;
    max = t > max ? t : max;
    record[t] = true;
  });

  if (noPositiveNumber) return 1;

  for (let i = 1; i < max; i++) if (!record[i]) return i;
  return max + 1;
}

export default function test() {
  [
    [[], 1],
    [[0], 1],
    [[1, 2, 0], 3],
    [[3, 4, -1, 1], 2],
    [[7, 8, 9, 11, 12], 1],
  ].forEach(([arr, result]) => console.info(firstMissingPositive(arr), result));
}
