/**
 * 扑克牌中的顺子
 * https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
 */

function isStraight(nums: number[]): boolean {
  const arr = nums.filter(t => !!t);
  const zeroNum = nums.length - arr.length;
  arr.sort((a, b) => a - b);
  if (arr.some((t, i) => t === arr[i + 1])) return false;
  const needZeroNum = arr.reduce((all, t, i) => (i ? all + (t - arr[i - 1] - 1) : all), 0);
  return zeroNum >= needZeroNum;
}

console.info(isStraight([1, 2, 3, 4, 5]));
