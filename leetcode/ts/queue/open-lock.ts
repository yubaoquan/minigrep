/**
 * 打开转盘锁
 * https://leetcode-cn.com/leetbook/read/queue-stack/kj48j/
 */


function openLock(deadends: string[], target: string): number {
  const q = [];
  const visited: any = {};
  let step = 0;

  q.push('0000');
  visited['0000'] = true;

  function enqueueUnvisited(item: string) {
    if (!visited[item]) {
      q.push(item);
      visited[item] = true;
    }
  }

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const current = q.shift()!;
      if (deadends.includes(current)) continue;
      if (current === target) return step;
      for (let j = 0; j < 4; j++) {
        enqueueUnvisited(plusOne(current, j));
        enqueueUnvisited(minusOne(current, j));
      }
    }
    step += 1;
  }

  return -1;
}
/**
 * 将 s[pos] 向上拨动一次
 */
function plusOne(s: string, pos: number) {
  const num = s[pos] === '9' ? '0' : +s[pos] + 1;
  return s.slice(0, pos) + num + s.slice(pos + 1);
}

/**
 * 将 s[pos] 向下拨动一次
 */
function minusOne(s: string, pos: number) {
  const num = s[pos] === '0' ? '9' : +s[pos] - 1;
  return s.slice(0, pos) + num + s.slice(pos + 1);
}

export default function() {
  [
    [
      ['0201', '0101', '0102', '1212', '2002'], '0202',
    ],
    [
      ['8888'], '0009',
    ],
    [
      ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888',
    ],
    [
      ['0000'], '8888',
    ],
  ].forEach(([deadends, target]: any) => {
    const result = openLock(deadends, target);
    console.info(result);
  });
}
