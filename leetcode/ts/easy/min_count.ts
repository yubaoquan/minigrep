/**
 * 拿硬币
 * https://leetcode-cn.com/problems/na-ying-bi/
*/

function minCount(coins: number[]): number {
  return coins
    .map((num) => Math.ceil(num / 2))
    .reduce((ret, item) => ret + item, 0);
}

console.info(minCount([4, 2, 1]) === 4);
