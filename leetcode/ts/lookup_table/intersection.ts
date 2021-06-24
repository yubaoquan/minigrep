// 两个数组的交集
// https://leetcode-cn.com/leetbook/read/all-about-lockup-table/f84ft/
import { arrEqIgnoreOrder } from '../util/array.ts';

function intersection(nums1: number[], nums2: number[]): number[] {
  const memo: Record<number, boolean> = {};
  nums1.forEach((t) => {
    memo[t] = true;
  });
  return nums2.filter((t) => {
    if (memo[t]) {
      memo[t] = false;
      return true;
    }
    return false;
  });
}

type Case = [number[], number[], number[]];

([
  [[1, 2, 2, 1], [2, 2], [2]],
  [[4, 9, 5], [9, 4, 9, 8, 4], [9, 4]],
] as Case[]).forEach(([a, b, expect]) => {
  const actual = intersection(a, b);
  console.info(arrEqIgnoreOrder(expect, actual));
});
