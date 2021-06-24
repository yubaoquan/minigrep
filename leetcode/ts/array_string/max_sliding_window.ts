/**
 * 滑动窗口的最大值
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/
 */

export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (!nums.length || !k) return [];
  const deque: number[] = [];
  const res: number[] = [];

  for (let j = 0, i = 1 - k; j < nums.length; i += 1, j += 1) {
    if (i > 0 && deque[0] === nums[i - 1]) deque.shift();
    while (deque.length && deque[deque.length - 1] < nums[j]) deque.pop();

    deque.push(nums[j]);
    if (i >= 0) res[i] = deque[0];
  }

  return res;
}
