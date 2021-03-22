/**
 * 和为s的连续正数序列
 * https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
 * https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/shi-yao-shi-hua-dong-chuang-kou-yi-ji-ru-he-yong-h/
 */
export function findContinuousSequence(target: number): number[][] {
  let left = 1;
  let right = 1;
  let sum = 0;
  const ret: number[][] = [];
  const half = target / 2;

  while (left < half) {
    if (sum < target) {
      sum += right;
      right++;
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      const arr: number[] = [];
      for (let i = left; i < right; i++) {
        arr.push(i);
      }
      ret.push(arr);
      sum -= left;
      left++;
    }
  }

  return ret;
}
