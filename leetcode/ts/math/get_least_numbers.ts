/**
 * 最小的k个数
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 */

function getLeastNumbers(arr: number[], k: number): number[] {
  const ret = new Array(k).fill(Number.MAX_VALUE);
  const lastIndex = k - 1;

  arr.forEach(n => {
    if (n >= ret[lastIndex]) return;
    for (let i = 0; i < k; i++) {
      if (n < ret[i]) {
        ret.splice(i, 0, n);
        ret.pop();
        return;
      }
    }
  });

  return ret;
}

console.info(getLeastNumbers([3, 2, 1], 2));
