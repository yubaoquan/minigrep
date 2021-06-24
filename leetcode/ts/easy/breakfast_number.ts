/**
 * 早餐组合
 * https://leetcode-cn.com/problems/2vYnGI/ */

function breakfastNumber(staple: number[], drinks: number[], x: number): number {
  if (!staple.length || !drinks.length) return 0;
  let result = 0;
  const max = 1000000007;
  const arr = new Array(x + 1).fill(0);
  staple.forEach((t) => {
    arr[t] += 1;
  });

  for (let i = 1; i < arr.length; i += 1) {
    arr[i] += arr[i - 1];
  }

  drinks.forEach((d) => {
    const pos = x - d;
    if (pos >= arr.length || pos < 0) return;
    result += arr[pos];
    result = result > max ? result % max : result;
  });

  return result;
}

type Case = [number[], number[], number, number];

([
  [[4, 6, 4, 4, 7, 5, 9], [9, 5, 2, 4, 1, 4, 1, 9, 6, 3], 2, 0],
  [[10, 20, 5], [5, 5, 2], 15, 6],
  [[2, 1, 1], [8, 9, 5, 1], 9, 8],
] as Case[]).forEach((item) => {
  const expect = item[3];
  const actual = breakfastNumber(item[0], item[1], item[2]);
  console.info(expect, actual, expect === actual);
});
