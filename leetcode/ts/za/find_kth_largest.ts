// 数组中的第K个最大元素
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvsehe/

function findKthLargest(nums: number[], k: number): number {
  const findMax = (notGt: number): number => {
    let max = Number.MIN_SAFE_INTEGER;
    nums.forEach(n => {
      max = n > max && n < notGt ? n : max;
    });
    return max;
  };

  let max = Number.MAX_VALUE;
  const q: number[] = [];

  while (q.length < k) {
    max = findMax(max);
    nums.forEach(t => {
      if (t === max) q.unshift(t);
    });
  }

  return q[0];
}

type Case = [number[], number, number];

export default function() {
  ([
    [[-1, -1], 2, -1],
    [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4, 4],
    [[3, 2, 1, 5, 6, 4], 2, 5],
  ] as Case[]).forEach(([nums, k, expect]) => {
    const ret = findKthLargest(nums, k);
    console.info(expect, ret, expect === ret);
  });
}
