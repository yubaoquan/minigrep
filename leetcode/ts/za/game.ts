// 252w 133s
// 240w 44s
// 250w 45s

export default function() {
  const rowLimits: number[] = [6, 3, 1, 5, 1, 7, 1, 6, 3, 8]; // 每行可以填充的数量
  const colLimits: number[] = [1, 5, 7, 5, 5, 7, 3, 4, 2, 2]; // 每列可以填充的数量
  const totalLimit = colLimits.reduce((sum, cur) => sum + cur, 0); // 整个地图填充的总数量
  const pathStrLen = (totalLimit * 3) + (totalLimit - 1); // i-j 三个字符, 逗号一个字符

  const map: boolean[][] = Array(10).fill(0).map(() => Array(10).fill(false));

  const colFills = Array(map[0]!.length).fill(0); // 每列实际填充的数量
  const rowFills = Array(map.length).fill(0); // 每行实际填充的数量

  // 检查完整填充结果是否合法
  const check = (solution: string): boolean => {
    if (solution.length < pathStrLen) return false;

    const paths = solution.split(',');

    // 填充数量不一致说明方案是错误的
    if (paths.length !== totalLimit) return false;

    colFills.fill(0); // 每列实际填充的数量
    rowFills.fill(0); // 每行实际填充的数量

    paths.forEach(positionStr => {
      const [row, col] = positionStr.split('-');
      rowFills[+row] += 1;
      colFills[+col] += 1;
    });

    // 行列填充数量与限制一致
    const rowsValid = rowFills.every((item, index) => item === rowLimits[index]);
    const columnsValid = colFills.every((item, index) => item === colLimits[index]);

    return columnsValid && rowsValid;
  };

  // 检查部分填充结果是否合法
  const partiallyValid = (pathsStr: string): boolean => {
    const paths: number[][] = pathsStr
      .split(',')
      .map(path => path.split('-').map(t => +t));

    colFills.fill(0); // 每列实际填充的数量
    rowFills.fill(0); // 每行实际填充的数量

    for (let k = 0; k < paths.length; k++) {
      const [row, col] = paths[k]!;
      colFills[col] += 1;
      rowFills[row] += 1;

      // 当前行/列填充数量比总允许数量大
      if (colFills[col] > colLimits[col] || rowFills[row] > rowLimits[row]) return false;
    }

    return true;
  };

  const q: string[] = ['0-0'];
  const visited: any = {};
  let counter = 0;

  const timeStart = Date.now();
  while (q.length) {
    const cur = q.shift()!;
    let path = '';

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0]!.length; j++) {
        counter += 1;

        path = `${cur},${i}-${j}`;
        if (visited[path]) continue;
        visited[path] = true;

        // 当前已填错
        if (!partiallyValid(path)) continue;
        q.push(path);

        if (check(path)) {
          console.info(path);
          return;
        }
      }
    }
    if (counter % 500000 === 0) {
      console.info(Object.keys(visited).length, q.length, path);
      console.info((Date.now() - timeStart) / 1000);
    }
  }
}
