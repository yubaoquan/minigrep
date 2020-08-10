function merge(intervals: number[][]): number[][] {
  if (!intervals.length) return [];
  const ret: number[][] = [];
  intervals.sort((a, b) => {
    if (a[0] < b[0]) return -1;
    if (a[0] === b[0] && a[1] < b[1]) return -1;
    return 1;
  });
  ret.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    const a = ret[ret.length - 1];
    const b = intervals[i];
    if (a[0] <= b[0] && a[1] >= b[1]) continue;
    else if (a[1] >= b[0] && a[1] <= b[1]) a[1] = b[1];
    else ret.push([b[0], b[1]]);
  }

  return ret;
}

export default function() {
  [
    [[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]],
    [[1, 4], [4, 5]],
    [[1, 4], [0, 4]],
    [[1, 4], [2, 3]],
  ].forEach(item => {
    console.info(merge(item));
  });
}
