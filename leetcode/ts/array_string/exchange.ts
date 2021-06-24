/**
 * 调整数组顺序使奇数位于偶数前面
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 */

export function exchange(nums: number[]): number[] {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const iIsOdd = nums[i] % 2 === 0;
    const jIsEven = nums[j] % 2 === 1;
    if (iIsOdd && jIsEven) {
      const t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
      i += 1;
      j -= 1;
    } else if (iIsOdd) j -= 1;
    else if (jIsEven) i += 1;
    else {
      i += 1;
      j -= 1;
    }
  }
  return nums;
}
