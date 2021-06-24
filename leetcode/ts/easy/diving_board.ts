/**
 * 跳水板
 * https://leetcode-cn.com/problems/diving-board-lcci/
 */

import { arrEq } from '../util/array.ts';

/**
 * 执行用时：264 ms, 在所有 TypeScript 提交中击败了5.13%的用户
 * 内存消耗：60.9 MB, 在所有 TypeScript 提交中击败了5.13%的用户
 */
function divingBoard(shorter: number, longer: number, k: number): number[] {
  const memo: Record<number, boolean> = {};
  const ret: number[] = [];
  for (let i = 0; i <= k; i += 1) {
    const size = (longer * i) + (shorter * (k - i));
    if (!memo[size]) {
      memo[size] = true;
      if (size) ret.push(size);
    }
  }
  return ret;
}

/**
 * 执行用时：256 ms, 在所有 TypeScript 提交中击败了5.13%的用户
 * 内存消耗：57.7 MB, 在所有 TypeScript 提交中击败了5.13%的用户
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function divingBoard2(shorter: number, longer: number, k: number): number[] {
  const ret: Set<number> = new Set();
  for (let i = 0; i <= k; i += 1) {
    const size = (longer * i) + (shorter * (k - i));
    if (size) ret.add(size);
  }
  return Array.from(ret);
}

type Case = [number, number, number, number[]];

([
  [1, 1, 0, []],
  [1, 2, 3, [3, 4, 5, 6]],
] as Case[]).forEach(([shorter, longer, k, expect]) => {
  const actual = divingBoard(shorter, longer, k);
  console.info(expect, actual, arrEq(expect, actual));
});
