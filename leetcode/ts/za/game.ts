export default function() {
  const colLimits: number[] = [1, 5, 7, 5, 5, 7, 3, 4, 2, 2]; // 每列可以填充的数量
  const rowLimits: number[] = [6, 3, 1, 5, 1, 7, 1, 6, 3, 8]; // 每行可以填充的数量
  const map: boolean[][] = Array(10).fill(0).map(() => Array(10).fill(false));

  // 检查填充结果是否合法
  const check = (solution: string): boolean => {
    const colFills = Array(map[0]!.length).fill(0); // 每列实际填充的数量
    const rowFills = Array(map.length).fill(0); // 每行实际填充的数量

    solution.split(',').forEach(positionStr => {
      const [row, col] = positionStr.split('-');
      rowFills[+row] += 1;
      colFills[+col] += 1;
    });

    // 行列填充数量与限制一致
    const rowsValid = rowFills.every((item, index) => item === rowLimits[index]);
    const columnsValid = colFills.every((item, index) => item === colLimits[index]);

    return columnsValid && rowsValid;
  };

  const q: string[] = ['0-0'];
  const visited: string[] = [];
  let counter = 0;

  while (q.length) {
    const cur = q.shift()!;

    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[0]!.length; j++) {
        counter += 1;
        if (counter % 10000 === 0) {
          console.info(visited.length);
        }
        const path = `${cur},${i}-${j}`;
        if (visited.includes(path)) continue;
        visited.push(path);
        q.push(path);

        if (check(path)) {
          console.info(path);
          return;
        }
      }
    }
  }
}
