function uniquePaths(mm: number, nn: number): number {
  const memo: any = {};

  const check = (m: number, n: number): number => {
    if (m === 1 || n === 1) return 1;
    const key = `${m}-${n}`;
    if (memo[key]) return memo[key];
    const ret = check(m - 1, n) + check(m, n - 1);
    memo[key] = ret;
    return ret;
  };

  return check(mm, nn);
}

export default function() {
  const ret = uniquePaths(7, 3);
  console.info(ret === 28);
}
