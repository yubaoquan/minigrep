/* eslint-disable no-bitwise */
/**
 * 翻转数位
 * https://leetcode-cn.com/problems/reverse-bits-lcci/
 */

function reverseBits(num: number): number {
  const strArr = (num >>> 0).toString(2).split('0');
  const oneList: string[] = strArr.filter((s) => !!s);
  oneList.sort((s1, s2) => s2.length - s1.length);
  let changed = false;

  for (let i = 1; i < strArr.length; i += 1) {
    if (strArr[i - 1] && strArr[i]) {
      const combinedStr = `${strArr[i - 1]}1${strArr[i]}`;
      if (combinedStr.length > oneList[0].length) {
        changed = true;
        oneList.unshift(combinedStr);
      }
    }
  }
  oneList.sort((s1, s2) => s2.length - s1.length);
  const ret = (oneList[0]?.length || 0) + (changed ? 0 : 1);
  return ret > 32 ? 32 : ret;
}

type Case = [number, number];

([
  [-1, 32],
  [46384524, 5],
  [1775, 8],
  [7, 4],
  [2147482622, 30],
  [2147483647, 32],
] as Case[]).forEach(([n, expect]) => {
  const actual = reverseBits(n);
  console.info(n, expect, actual, expect === actual);
});
