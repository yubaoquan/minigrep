/**
 * https://leetcode-cn.com/problems/advantage-shuffle/
 * 超时
 */
import { arrEq } from '../util/array.ts';

export function advantageCount(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length;

  // 记录原位置索引, 从大到小排序
  const maxpq: [number, number][] = nums2.map((t, i) => [i, t]);
  maxpq.sort((a, b) => b[1] - a[1]);

  nums1.sort((a, b) => a - b); // 从小到大

  let left = 0;
  let right = n - 1;
  const res: number[] = [];

  while (maxpq.length) {
    const [i, maxVal] = maxpq.shift()!;
    if (maxVal < nums1[right]) {
      res[i] = nums1[right];
      right--;
    } else {
      res[i] = nums1[left];
      left++;
    }
  }

  return res;
}

type Case = [number[], number[], number[]];

const test = () => {
  /* eslint-disable prettier/prettier */
  ([
    [[2, 7, 11, 15], [1, 10, 4, 11], [2, 11, 7, 15]],
    [[12, 24, 8, 32], [13, 25, 32, 11], [24, 32, 8, 12]],
  ] as Case[]).forEach(([a, b, expect]) => {
  /* eslint-enable prettier/prettier */
    const actual = advantageCount(a, b);
    console.info(arrEq(expect, actual));
  });
};

test();
