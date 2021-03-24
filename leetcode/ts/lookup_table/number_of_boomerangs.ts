// 回旋镖的数量
// https://leetcode-cn.com/leetbook/read/all-about-lockup-table/xhp45m/

function numberOfBoomerangs(points: number[][]): number {
  const distances: Record<string, number> = {};
  let ret = 0;
  const memo: Record<string, number> = {};

  function getDistance(a: number[], b: number[]) {
    const xOffset = Math.abs(a[0] - b[0]);
    const yOffset = Math.abs(a[1] - b[1]);
    const key = xOffset < yOffset ? `${xOffset}-${yOffset}` : `${yOffset}-${xOffset}`;
    if (!memo[key]) memo[key] = (xOffset ** 2) + (yOffset ** 2);
    return memo[key];
  }

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const distance = getDistance(points[i], points[j]);
      distances[`${i}-${j}`] = distance;
      distances[`${j}-${i}`] = distance;
    }
  }

  for (let i = 0; i < points.length; i++) {
    const distancesFromI: Record<string, number> = {};

    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;

      const distance = distances[`${i}-${j}`];
      const distanceRecordNum = distancesFromI[distance];
      distancesFromI[distance] = distanceRecordNum ? distanceRecordNum + 1 : 1;
    }

    Object.entries(distancesFromI).forEach(([, value]) => {
      if (value > 1) ret += value * (value - 1);
    });
  }

  return ret;
}

// console.info(numberOfBoomerangs([[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]));
console.info(numberOfBoomerangs([
  [1, 8], [7, 9], [2, 0], [2, 3], [7, 5], [9, 2], [2, 8], [9, 7], [3, 6], [1, 2],
]));
