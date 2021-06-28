/**
 * 旋转矩阵
 * https://leetcode-cn.com/leetbook/read/array-and-string/clpgd/
 */

function rotate(matrix: number[][]): void {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  const colHalf = Math.ceil(colLen / 2);
  const rowHalf = Math.floor(rowLen / 2);

  for (let y = 0; y < rowHalf; y += 1) {
    for (let x = 0; x < colHalf; x += 1) {
      const [y1, x1] = [rowLen - x - 1, y];
      const [y2, x2] = [rowLen - y - 1, colLen - x - 1];
      const [y3, x3] = [x, colLen - y - 1];

      const t: number = matrix[y][x];
      matrix[y][x] = matrix[y1][x1];
      matrix[y1][x1] = matrix[y2][x2];
      matrix[y2][x2] = matrix[y3][x3];
      matrix[y3][x3] = t;
    }
  }
}

export default () => {
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
  ].forEach((arr) => {
    rotate(arr);
    console.info(arr);
  });
};
