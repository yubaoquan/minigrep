// 消失的数字
// https://leetcode-cn.com/problems/missing-number-lcci/

function missingNumber(nums: number[]): number {
  const len = nums.length;
  let total = (1 + len) * len / 2;
  for (let i = 0; i < len; i++) total -= nums[i];

  return total;
}

export default function() {
  [
    [[3, 0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  ].forEach(([arr, expect]: any) => {
    const ret = missingNumber(arr);
    console.info(ret === expect);
  });
}
