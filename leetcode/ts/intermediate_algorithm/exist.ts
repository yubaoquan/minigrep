// 单词搜索
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvkwe2/

function exist(board: string[][], word: string): boolean {
  function find(col: number, row: number): boolean {
    if (board[row][col] !== word[0]) return false;
    if (word.length === 1) return true;

    const memo: string[] = [`${col}-${row}`];
    const visited: Record<string, boolean> = {};
    const xEnd = board[0].length;
    const yEnd = board.length;

    while (memo.length) {
      const currentPath = memo.shift()!;
      const pathArr = currentPath.split(',');
      const currentPosition = pathArr[pathArr.length - 1];
      const [x, y] = currentPosition.split('-').map(t => +t);

      const newPositions = [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]]
        .filter(([px, py]) =>
          ((px > -1 && px < xEnd) && (py > -1 && py < yEnd))
          && board[py][px] === word[pathArr.length]
          && !pathArr.includes(`${px}-${py}`));

      if (pathArr.length === word.length - 1 && newPositions.length) return true;

      for (let k = 0; k < newPositions.length; k++) {
        const [px, py] = newPositions[k];
        const newPath = `${currentPath},${px}-${py}`;
        if (visited[newPath]) continue;
        memo.unshift(newPath);
        visited[newPath] = true;
      }
    }

    return false;
  }

  return board.some((arr, y) => arr.some((char, x) => find(x, y)));
}

export default function() {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];

  console.info(exist(board, 'SEE'));
  console.info(exist(board, 'ABCCED'));
  console.info(!exist(board, 'ABCB'));
}
