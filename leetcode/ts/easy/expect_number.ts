/**
 * 期望个数统计
 * https://leetcode-cn.com/problems/qi-wang-ge-shu-tong-ji/
 */
function expectNumber(scores: number[]): number {
  return new Set(scores).size;
}

console.info(expectNumber([1, 2, 3]) === 3);
