/** 循环码排列 */
/** https://leetcode-cn.com/problems/circular-permutation-in-binary-representation/ */

export function circularPermutation(n: number, start: number): number[] {
  const targetLength = 2 ** n;
  let ret: string[] = ['0', '1'];
  while (ret.length < targetLength) {
    const left = ret.map((str) => `0${str}`);
    const right = ret.reverse().map((str) => `1${str}`);
    ret = [...left, ...right];
  }

  const nums = ret.map((t) => parseInt(t, 2));
  const index = nums.findIndex((t) => t === start);
  return [...nums.slice(index), ...nums.slice(0, index)];
}
