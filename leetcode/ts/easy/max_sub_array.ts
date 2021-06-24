/**
 * 连续数列
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/solution/lian-xu-shu-lie-by-leetcode-solution-be4z/
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/solution/chao-ji-jian-dan-de-jie-fa-by-yi-dai-mi-kang-ji-lo/
 */

export function maxSubArray(nums: number[]): number {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
}

const res = maxSubArray([-1, -1, -1, 10]);
console.info(res);
