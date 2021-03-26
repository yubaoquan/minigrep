/**
 * 配对交换
 * https://leetcode-cn.com/problems/exchange-lcci/
 */

/**
 * 执行用时：108 ms, 在所有 TypeScript 提交中击败了16.67%的用户
 * 内存消耗：39.4 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
function exchangeBits(num: number): number {
  const arr = num.toString(2).split('');
  if (arr.length % 2 === 1) arr.unshift('0');

  const newNumStr = arr
    .map((t, i, digits) => (i % 2 === 0 ? digits[i + 1] : digits[i - 1]))
    .join('');

  return parseInt(newNumStr, 2);
}

/**
 * 执行用时：80 ms, 在所有 TypeScript 提交中击败了100.00%的用户
 * 内存消耗：39 MB, 在所有 TypeScript 提交中击败了100.00%的用户
 */
export function exchangeBits2(num: number): number {
  let str = num.toString(2);
  str = str.length % 2 === 0 ? str : `0${str}`;
  let ret = 0;
  let isEven = true;
  for (let i = 0; i < str.length; i++) {
    const index = isEven ? i + 1 : i - 1;
    if (str[index] === '1') ret += 2 ** (str.length - i - 1);
    isEven = !isEven;
  }

  return ret;
}

console.info(exchangeBits(3));
console.info(exchangeBits(1));
