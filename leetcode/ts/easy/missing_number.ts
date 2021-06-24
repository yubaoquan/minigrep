// 消失的数字
// https://leetcode-cn.com/problems/missing-number-lcci/
// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/

function missingNumber(nums: number[]): number {
  const len = nums.length;
  let total = (1 + len) * len / 2;
  for (let i = 0; i < len; i += 1) total -= nums[i];

  return total;
}

type Case = [number[], number];

export default function () {
  ([
    [[3, 0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  ] as Case[]).forEach(([arr, expect]) => {
    const ret = missingNumber(arr);
    console.info(ret === expect);
  });
}
