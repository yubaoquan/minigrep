// 直线上最多的点数
// https://leetcode-cn.com/leetbook/read/all-about-lockup-table/xha3f7/
import bigArray from './big_array.ts';

function maxPoints(points: number[][]): number {
  if (points.length === 1) return 1;
  const memo: Record<string, Set<number>> = {};

  for (let i = 0; i < points.length - 1; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      let key;
      if (x1 === x2) {
        key = x1;
      } else {
        const k = (y2 - y1) / (x2 - x1);

        /*
        这里求b的逻辑有问题
        以下两组点, k = 0.4142857142857143
        第一组的 b = 15.999999999999972
        第二组的 b = 16
        ([ 560, 248 ] [ 700, 306 ])
        ([ 630, 277 ] [ 0, 16 ])
         */
        const b = y1 - (x1 * k);
        key = `${k}-${b}`;
      }
      memo[key] = memo[key] || new Set();
      memo[key].add(i);
      memo[key].add(j);
    }
  }

  return (Object.values(memo) as Set<number>[]).reduce((max, set) => {
    const { size } = set;
    return max > size ? max : size;
  }, 0);
}

// https://leetcode-cn.com/problems/max-points-on-a-line/solution/yong-xie-lu-by-powcai/
function maxPoints2(points: number[][]): number {
  const n = points.length;
  if (n === 0) return 0;
  if (n === 1) return 1;

  // 求最大公约数
  const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);

  let res = 0;

  for (let i = 0; i < n - 1; i += 1) {
    const slope = new Map<string, number>();
    let repeat = 0;
    let tmpMax = 0;

    for (let j = i + 1; j < n; j += 1) {
      let dy = points[i][1] - points[j][1];
      let dx = points[i][0] - points[j][0];
      if (dy === 0 && dx === 0) {
        repeat += 1;
        continue;
      }
      const g = gcd(dy, dx);
      if (g !== 0) {
        dy /= g;
        dx /= g;
      }
      const tmp = `${dy}/${dx}`;
      slope.set(tmp, (slope.get(tmp) || 0) + 1);
      tmpMax = Math.max(tmpMax, slope.get(tmp) as number);
    }
    res = Math.max(res, repeat + tmpMax + 1);
  }
  return res;
}

export type Case = [number[][], number];

([
  [bigArray, 22],
  [[[1, 1], [2, 1], [2, 2], [1, 4], [3, 3]], 3],
  [[[1, 1], [2, 2], [3, 3]], 3],
  [[[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]], 4],
] as Case[]).forEach(([arr, expect]) => {
  const actual = maxPoints(arr);
  const actual2 = maxPoints2(arr);
  console.info(actual, actual2, expect);
  console.info(actual === expect);
});
