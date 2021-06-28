function isHappy(n: number): boolean {
  const powSum = (num: number): number => num
    .toString()
    .split('')
    .map((item) => +item)
    .reduce((sum, cur) => sum + (cur * cur), 0);

  let temp = powSum(n);
  const cache: Record<number, boolean> = {};

  while (temp > 1) {
    temp = powSum(temp);
    if (temp > 1 && cache[temp]) return false;
    cache[temp] = true;
  }

  return true;
}

type Case = [number, boolean];

export default () => {
  ([
    [19, true],
  ] as Case[]).forEach(([n, expect]) => {
    const ret = isHappy(n);
    console.info(n, expect, ret);
  });
};
