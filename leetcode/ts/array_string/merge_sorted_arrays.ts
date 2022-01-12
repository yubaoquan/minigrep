/**
 * 合并排序的数组
 * https://leetcode-cn.com/problems/sorted-merge-lcci/
 */

function merge(a: number[], m: number, b: number[], n: number) {
  let i = 0;
  let right = m;
  for (let j = 0; j < n; j += 1) {
    for (; i < a.length; i += 1) {
      if (b[j] < a[i] || i === right) {
        right += 1;
        a.splice(i, 0, b[j]);
        a.pop();
        break;
      }
    }
  }
}

type Case = [number[], number, number[], number];

(
  [
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
    [[-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3],
  ] as Case[]
).forEach(([arr1, m, arr2, n]) => {
  merge(arr1, m, arr2, n);
  console.info(arr1);
});
