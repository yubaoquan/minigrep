/**
 * Excel表列名称
 * https://leetcode-cn.com/problems/excel-sheet-column-title/
 */

function convertToTitle(columnNumber: number): string {
  const ret: number[] = [];
  const beginCharCode = 'A'.charCodeAt(0);
  let left = columnNumber;
  while (left > 0) {
    left -= 1;
    ret.unshift((left % 26) + beginCharCode);
    left = Math.floor(left / 26);
  }

  return ret.map((n) => String.fromCharCode(n)).join('');
}

[1, 2, 3, 26, 27, 28, 701, 2147483647].forEach((n) => {
  console.info(convertToTitle(n));
});
