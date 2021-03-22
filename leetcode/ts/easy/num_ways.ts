/**
 * 传递信息
 * https://leetcode-cn.com/problems/chuan-di-xin-xi/
 */

export function numWays(n: number, relation: number[][], k: number): number {
  const memo: Record<number, number[]> = {};
  relation.forEach(([a, b]) => {
    if (memo[a]) memo[a].push(b);
    else memo[a] = [b];
  });

  let currentPositions = [0];
  for (let i = 0; i < k; i++) {
    const newPositions: number[] = [];
    currentPositions.forEach(position => {
      if (memo[position]) newPositions.push(...memo[position]);
    });
    currentPositions = newPositions;
  }
  return currentPositions.filter(position => position === n - 1).length;
}

type Case = [number, number[][], number, number];

([
  [5, [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], 3, 3],
  [3, [[0, 2], [2, 1]], 2, 0],
] as Case[]).forEach(([n, relation, k, expect]) => {
  const actual = numWays(n, relation, k);
  console.info(expect, actual, expect === actual);
});
