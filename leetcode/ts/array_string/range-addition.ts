/**
 * https://leetcode-cn.com/problems/range-addition/
 */

import { arrEq } from '../util/array.ts';

export function getModifiedArray(
  length: number,
  updates: number[][],
): number[] {
  const ret = Array(length).fill(0);
  const diff = Array(length).fill(0);

  updates.forEach(([start, end, inc]) => {
    diff[start] += inc;
    if (end + 1 < diff.length) diff[end + 1] -= inc;
  });

  ret[0] = diff[0];

  for (let i = 1; i < ret.length; i += 1) {
    ret[i] = ret[i - 1] + diff[i];
  }

  return ret;
}

const test = () => {
  const actual = getModifiedArray(5, [
    [1, 3, 2],
    [2, 4, 3],
    [0, 2, -2],
  ]);

  console.info(arrEq(actual, [-2, 0, 3, 5, 3]));
};

test();
