/**
 * 插入
 * https://leetcode-cn.com/problems/insert-into-bits-lcci/
 */

function insertBits(n: number, m: number, i: number, j: number): number {
  const len = j - i + 1;
  const mBitStr = m.toString(2).substr(0, len).padStart(len, '0');
  const nBitStr = n.toString(2);
  const a = nBitStr.substring(0, nBitStr.length - j - 1);
  const b = nBitStr.substring(nBitStr.length - i);
  return parseInt(a + mBitStr + b, 2);
}

console.info(insertBits(1024, 19, 2, 6));
