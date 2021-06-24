// 优化记录
// 252w 133s
// 240w 44s
// 250w 45s

// 50.56s
// 最终答案: 0-0,0-1,1-1,1-2,0-2,0-3,0-4,0-5,1-5,2-5,3-5,3-4,3-3,3-2,3-1,4-1,5-1,5-2,5-3,5-4,5-5,5-6,5-7,6-7,7-7,7-6,7-5,7-4,7-3,7-2,8-2,9-2,9-3,9-4,9-5,9-6,9-7,9-8,8-8,8-9,9-9

type Position = { x: number, y: number };

export default function () {
  const rowLimits: number[] = [6, 3, 1, 5, 1, 7, 1, 6, 3, 8]; // 每行可以填充的数量
  const colLimits: number[] = [1, 5, 7, 5, 5, 7, 3, 4, 2, 2]; // 每列可以填充的数量
  const totalLimit = colLimits.reduce((sum, cur) => sum + cur, 0); // 整个地图填充的总数量
  const pathStrLen = (totalLimit * 3) + (totalLimit - 1); // i-j 三个字符, 逗号一个字符

  const map: boolean[][] = Array(10).fill(0).map(() => Array(10).fill(false));

  const colFills = Array(map[0]!.length).fill(0); // 每列实际填充的数量
  const rowFills = Array(map.length).fill(0); // 每行实际填充的数量

  /** 检查完整填充结果是否合法 */
  const check = (solution: string): boolean => {
    if (solution.length < pathStrLen) return false;

    const paths = solution.split(',');

    // 填充数量不一致说明方案是错误的
    if (paths.length !== totalLimit) return false;

    colFills.fill(0); // 每列实际填充的数量
    rowFills.fill(0); // 每行实际填充的数量

    paths.forEach((positionStr) => {
      const [row, col] = positionStr.split('-');
      rowFills[+row] += 1;
      colFills[+col] += 1;
    });

    // 行列填充数量与限制一致
    const rowsValid = rowFills.every((item, index) => item === rowLimits[index]);
    const columnsValid = colFills.every((item, index) => item === colLimits[index]);

    return columnsValid && rowsValid;
  };

  /** 检查部分填充结果是否合法 */
  const partiallyValid = (pathsStr: string): boolean => {
    const paths: number[][] = pathsStr
      .split(',')
      .map((path) => path.split('-').map((t) => +t));

    colFills.fill(0); // 每列实际填充的数量
    rowFills.fill(0); // 每行实际填充的数量

    for (let k = 0; k < paths.length; k += 1) {
      const [row, col] = paths[k]!;
      colFills[col] += 1;
      rowFills[row] += 1;

      // 当前行/列填充数量比总允许数量大
      if (colFills[col] > colLimits[col] || rowFills[row] > rowLimits[row]) return false;
    }

    return true;
  };

  /** 坐标是否在地图里且是空位 */
  const canGoTo = ({ x, y }: Position, arr: string[]): boolean => {
    const isInMap = (x >= 0 && x < 10) && (y >= 0 && y < 10);
    const isEmptyPos = !arr.includes(`${x}-${y}`);
    return isInMap && isEmptyPos;
  };

  const q: string[] = ['0-0'];
  const visited: Record<string, boolean> = {};
  let counter = 0;

  while (q.length) {
    const cur = q.shift()!;

    if (visited[cur]) continue;
    visited[cur] = true;

    const arr = cur.split(',');
    const currentPos = arr[arr.length - 1].split('-');
    let [x, y]: (string|number)[] = currentPos;
    x = +x;
    y = +y;

    let result = '';
    [
      { x: x - 1, y },
      { x: x + 1, y },
      { x, y: y - 1 },
      { x, y: y + 1 },
    ]
      .filter((pos) => canGoTo(pos, arr))
      .forEach((pos) => {
        const path = `${cur},${pos.x}-${pos.y}`;
        if (!partiallyValid(path)) return;
        if (counter % 1000 === 0) console.info(path);
        q.push(path);
        if (check(path)) result = path;
      });

    if (result) {
      console.info(result);
      return result;
    }

    counter += 1;
  }
}
