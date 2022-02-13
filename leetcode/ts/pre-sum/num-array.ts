/**
 * https://leetcode-cn.com/problems/range-sum-query-immutable/
 */

export class NumArray {
  preSum: number[] = [0];

  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i += 1) {
      this.preSum[i + 1] = this.preSum[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.preSum[right + 1] - this.preSum[left];
  }
}

const test = () => {
  const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
  [
    [0, 2, 1],
    [2, 5, -1],
    [0, 5, -3],
  ].forEach(([a, b, expected]) => {
    const actual = numArray.sumRange(a, b);
    if (actual !== expected) console.error(a, b, expected, actual);
  });
};

test();
