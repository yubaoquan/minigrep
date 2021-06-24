// 在排序数组中查找元素的第一个和最后一个位置
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xv4bbv/

/*
执行用时： 88 ms , 在所有 typescript 提交中击败了 46.15% 的用户
内存消耗： 41.7 MB , 在所有 typescript 提交中击败了 5.55% 的用户
*/

import { arrEq } from '../util/array.ts';

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];
  if (nums.length === 2) {
    if (nums[0] !== target && nums[1] !== target) return [-1, -1];
    if (nums[0] === nums[1]) return [0, 1];
    return nums[0] === target ? [0, 0] : [1, 1];
  }

  let s = -1;
  let e = -1;

  /**
   * 超过两个元素, 二分查找
   * @param middle 中间位置
   */
  const middleFind = (start: number, end: number) => {
    if (end < start) return;
    const middle = Math.floor((start + end) / 2);
    const middleValue = nums[middle];

    if (middleValue === target) {
      s = s === -1 || (s > -1 && middle < s) ? middle : s;
      e = e === -1 || (e > -1 && middle > e) ? middle : e;
    }

    if (middleValue >= target && start < middle) middleFind(start, middle - 1);
    if (middleValue <= target && middle < end) middleFind(middle + 1, end);
  };

  middleFind(0, nums.length - 1);
  return [s, e];
}

type Case = [number[], number, number[]];

export default function () {
  ([
    [[0, 0, 1, 2, 2], 2, [3, 4]],
    [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
    [[3, 3, 3], 3, [0, 2]],
    [[1, 2, 3, 3, 3, 3, 4, 5, 9], 3, [2, 5]],
    [[1, 2, 3], 3, [2, 2]],
    [[1, 2, 3], 2, [1, 1]],
    [[1, 2, 3], 1, [0, 0]],
    [[1, 5], 4, [-1, -1]],
    [[2, 2], 3, [-1, -1]],
    [[1], 1, [0, 0]],
    [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
  ] as Case[]).forEach(([nums, target, expect]) => {
    const ret = searchRange(nums, target);
    const correct = arrEq(ret, expect);
    console.info(correct);
    if (!correct) console.info(ret);
  });
}
