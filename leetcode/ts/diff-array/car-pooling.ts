/**
 * https://leetcode-cn.com/problems/car-pooling/
 */

export function carPooling(trips: number[][], capacity: number): boolean {
  const maxLen = Math.max(...trips.map((item) => item[2]));
  const ret = [];
  const diff = Array(maxLen).fill(0);

  trips.forEach(([num, start, end]) => {
    diff[start] += num;
    if (end < maxLen) diff[end] -= num;
  });

  ret[0] = diff[0];
  for (let i = 1; i < maxLen; i += 1) {
    ret[i] = ret[i - 1] + diff[i];
  }

  return ret.every((item) => item <= capacity);
}

type Case = [[number, number, number][], number, boolean];

const test = () => {
  /* eslint-disable prettier/prettier */
  ([
    [[[2, 1, 5], [3, 3, 7]], 4, false],
    [[[2, 1, 5], [3, 3, 7]], 5, true],
    [[[2, 1, 5], [3, 5, 7]], 3, true],
    [[[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11, true],
  ] as Case[]).forEach(([trips, capacity, expected]) => {
  /* eslint-enable prettier/prettier */
    const actual = carPooling(trips, capacity);
    console.info(actual === expected);
  });
};

test();
