/**
 * https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 */

export class NumMatrix {
  preSum: number[][] = [[0]];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;
    if (!m || !n) return;

    const { preSum } = this;

    for (let i = 1; i <= m; i += 1) {
      preSum[i] = [0];

      for (let j = 1; j <= n; j += 1) {
        preSum[i - 1][j] ||= 0;
        preSum[i][j - 1] ||= 0;
        preSum[i - 1][j - 1] ||= 0;

        /* eslint-disable prettier/prettier */
        preSum[i][j] = preSum[i - 1][j]
          + preSum[i][j - 1]
          + matrix[i - 1][j - 1]
          - preSum[i - 1][j - 1];
        /* eslint-enable prettier/prettier */
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const { preSum } = this;

    /* eslint-disable prettier/prettier */
    return preSum[row2 + 1][col2 + 1]
      - preSum[row1][col2 + 1]
      - preSum[row2 + 1][col1]
      + preSum[row1][col1];
    /* eslint-enable prettier/prettier */
  }
}

const test = () => {
  const numMatrix = new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ]);
  const a = numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
  const b = numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
  const c = numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
  const success = a === 8 && b === 11 && c === 12;
  console.info(a, b, c);
  console.info(success);
};

test();
