// 四数相加 II
// https://leetcode-cn.com/leetbook/read/all-about-lockup-table/xheops/

// import { debug } from '../util/debug.ts';

function fourSumCount(a: number[], b: number[], c: number[], d: number[]): number {
  // return debug(nSumCount([a, b, c, d], 0, 0)).length;
  const map: any = {};
  let ret = 0;

  a.forEach(aItem => {
    b.forEach(bItem => {
      const sum = aItem + bItem;
      map[sum] = map[sum] === undefined ? 1 : map[sum] + 1;
    });
  });

  c.forEach(cItem => {
    d.forEach(dItem => {
      const sum = cItem + dItem;
      if (map[-sum]) ret += map[-sum];
    });
  });

  return ret;
}

function nSumCount(numsArrs: number[][], start: number, target: number): number[][] {
  if (!numsArrs.length) return [];
  const ret: number[][] = [];

  if (start + 1 === numsArrs.length) {
    numsArrs[start].forEach((t, i) => {
      if (t === target) ret.push([i]);
    });
    return ret;
  }

  for (let i = start; i < numsArrs.length; i++) {
    numsArrs[i].forEach((n, j) => {
      const subRet = nSumCount(numsArrs, i + 1, target - n);
      if (subRet.length) ret.push(...subRet.map(subArr => [j, ...subArr]));
    });
  }

  return start === 0 ? ret.filter(arr => arr.length === numsArrs.length) : ret;
}

const a = [1, 2];
const b = [-2, -1];
const c = [-1, 2];
const d = [0, 2];

console.info(nSumCount([c, d], 1, 0));

console.info(fourSumCount(a, b, c, d));
