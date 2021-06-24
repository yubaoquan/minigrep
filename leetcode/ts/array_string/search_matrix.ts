// 搜索二维矩阵 II
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvc64r/
function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix.length || !matrix[0].length) return false;

  const width = matrix[0].length;
  if (matrix[0][0] > target) return false;
  if (matrix[matrix.length - 1][width - 1] < target) return false;

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < width; col += 1) {
      if (matrix[row][col] === target) return true;
      if (matrix[row][col] > target) break;
    }
  }

  return false;
}

export default function () {
  let matrix;

  matrix = [
    [3, 3, 8, 13, 13, 18],
    [4, 5, 11, 13, 18, 20],
    [9, 9, 14, 15, 23, 23],
    [13, 18, 22, 22, 25, 27],
    [18, 22, 23, 28, 30, 33],
    [21, 25, 28, 30, 35, 35],
    [24, 25, 33, 36, 37, 40],
  ];

  console.info(searchMatrix(matrix, 21) === true);

  matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ];

  console.info(searchMatrix(matrix, 5) === true);
  console.info(searchMatrix(matrix, 20) === false);

  matrix = [[-1, 3]];
  console.info(searchMatrix(matrix, 1) === false);
}
