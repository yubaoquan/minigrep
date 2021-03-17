/**
 * 黑白方格画
 * https://leetcode-cn.com/problems/ccw6C7/
 * https://leetcode-cn.com/problems/ccw6C7/solution/bao-li-po-jie-hei-bai-fang-ge-hua-xiang-xi-jie-ti-/
 */

function paintingPlan(n: number, k: number): number {
  if (!k || k === n * n) return 1;
  if (n > k) return 0;
  let ret = 0;

  for (let i = 0; i < n; i++) {
    const x = (k - (n * i)) / (n - i);
    if (x.toString().includes('.') || x < 0) continue;
    ret += c(n, i) * c(n, x);
  }

  return ret;
}

// all 取 a
function c(all: number, a: number) {
  return factorial(all) / (factorial(a) * factorial(all - a));
}

// 阶乘
function factorial(n: number) {
  let ret = 1;
  for (let i = 1; i <= n; i++) ret *= i;
  return ret;
}

type Case = [number, number, number];

([
  [5, 7, 0],
  [2, 2, 4],
  [2, 4, 1],
  [2, 1, 0],
] as Case[]).forEach(item => {
  const actual = paintingPlan(item[0], item[1]);
  const expect = item[2];
  console.info(expect, actual, expect === actual);
});

// [
//   [4, 2],
//   [13, 3],
// ].forEach(([a, b]) => console.info(a, b, c(a, b)));
