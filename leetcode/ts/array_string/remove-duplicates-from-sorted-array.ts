/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

import { arrEq } from '../util/array.ts';

export function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }

  return slow + 1;
}

type Case = [number[], number, number[]];

const test = () => {
  (
    [
      [[1, 1, 2], 2, [1, 2]],
      [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5, [0, 1, 2, 3, 4]],
    ] as Case[]
  ).forEach(([nums, expectedLen, expectedArr]) => {
    const actualLen = removeDuplicates(nums);
    console.info(
      expectedLen === actualLen && arrEq(nums.slice(0, actualLen), expectedArr),
    );
  });
};

test();
