/**
 * 零矩阵
 * https://leetcode-cn.com/leetbook/read/array-and-string/ciekh/
 */
function setZeroes(matrix: number[][]): void {
  const rowsToClean: any = {};
  const colsToClean: any = {};
  const colCleaned: any = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowsToClean[i] = true;
        colsToClean[j] = true;
        if (!colCleaned[j]) {
          for (let k = 0; k < i; k++) matrix[k][j] = 0;
          colCleaned[j] = true;
        }
      } else if (colsToClean[j]) {
        matrix[i][j] = 0;
      }
    }
    if (rowsToClean[i]) matrix[i] = new Array(matrix[i].length).fill(0);
  }
}

export default function() {
  [
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ],
  ].forEach(item => {
    setZeroes(item);
    console.info(item);
  });
}
