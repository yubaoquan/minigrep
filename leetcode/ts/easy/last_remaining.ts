/**
 * 圆圈中最后剩下的数字
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/jian-zhi-offer-62-yuan-quan-zhong-zui-ho-dcow/
 * 解答中 x→(x+t)%n 的推导看不懂
 */

function lastRemaining(n: number, m: number): number {
  const arr = new Array(n).fill(0).map((t, i) => i);
  let pos = m - 1;
  while (arr.length > 1) {
    pos %= arr.length;
    arr.splice(pos, 1);
    pos += m - 1;
  }
  return arr[0];
}

console.info(lastRemaining(9, 13));
