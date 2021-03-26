/* eslint-disable no-bitwise */
/**
 * 整数转换
 * https://leetcode-cn.com/problems/convert-integer-lcci/
 */

function convertInteger(a: number, b: number): number {
  let aStr = (a >>> 0).toString(2);
  let bStr = (b >>> 0).toString(2);
  if (aStr.length > bStr.length) bStr = bStr.padStart(aStr.length, '0');
  else aStr = aStr.padStart(bStr.length, '0');
  return aStr.split('').filter((t, i) => t !== bStr[i]).length;
}

console.info(convertInteger(826966453, -729934991));
