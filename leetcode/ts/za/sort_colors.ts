// 颜色分类
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvg25c/
import { arrEq } from '../util/array.ts';

function sortColors(nums: number[]): void {
  let redIndex = 0;
  let blueIndex = nums.length - 1;
  const [red, blue] = [0, 2];

  const swap = (i: number, j: number) => {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  };

  const updateIndex = () => {
    while (nums[redIndex] === red && redIndex < nums.length) redIndex += 1;
    while (nums[blueIndex] === blue && blueIndex > 0) blueIndex -= 1;
  };

  updateIndex();

  if (redIndex === nums.length || blueIndex === 0) return;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === red && nums[redIndex] !== red && redIndex < i) {
      swap(i, redIndex);
      updateIndex();
      if (redIndex === nums.length || blueIndex === 0) return;
    }
    if (nums[i] === blue && nums[blueIndex] !== blue && blueIndex > i) {
      swap(i, blueIndex);
      updateIndex();
      if (redIndex === nums.length || blueIndex === 0) return;
    }
    if (nums[i] === red && nums[redIndex] !== red && redIndex < i) {
      swap(i, redIndex);
      updateIndex();
      if (redIndex === nums.length || blueIndex === 0) return;
    }
  }
}

type Case = [number[], number[]];

export default function() {
  ([
    [[2, 2, 0, 0, 2, 0, 2, 1, 0], [0, 0, 0, 0, 1, 2, 2, 2, 2]],
    [[0, 2, 2, 2, 0, 2, 1, 1], [0, 0, 1, 1, 2, 2, 2, 2]],
    [[2, 1, 2], [1, 2, 2]],
    [[0, 1, 0], [0, 0, 1]],
    [[1, 2, 0], [0, 1, 2]],
    [[2, 0, 2, 1, 1, 0], [0, 0, 1, 1, 2, 2]],
  ] as Case[]).forEach(([arr, expect]) => {
    sortColors(arr);
    console.info(arr);
    console.info(arrEq(arr, expect));
  });
}
