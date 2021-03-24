// 任务调度器
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xwvaot/
// https://leetcode-cn.com/problems/task-scheduler/solution/ren-wu-diao-du-qi-by-leetcode/

const json = await Deno.readTextFile('./tasks.json');
const tasks2 = JSON.parse(json);

function leastInterval(tasks: string[], n: number): number {
  const map = Array(26).fill(0);
  const codeOfA = 'A'.charCodeAt(0);
  const codeOfZ = codeOfA + 25;
  const offsetsOfChar: Record<string, number> = {}; // { A: 0, B: 1,..., Z: 25 }

  for (let chraCode = codeOfA; chraCode <= codeOfZ; chraCode++) {
    offsetsOfChar[String.fromCharCode(chraCode)] = chraCode - codeOfA;
  }

  tasks.forEach(char => map[offsetsOfChar[char]]++);
  map.sort((a, b) => a - b);

  let time = 0;
  while (map[25] > 0) {
    for (let i = 0; i <= n; i++) {
      if (!map[25]) break; // 全部执行完了
      if (i < 26 && map[25 - i] > 0) map[25 - i]--;
      time++;
    }
    map.sort((a, b) => a - b);
  }
  return time;
}

type Case = [string[], number, number];

([
  [tasks2, 8, 1000],
  [['A', 'A', 'A', 'B', 'B', 'B'], 2, 8],
] as Case[]).forEach(([arr, interval, expect]) => {
  const ret = leastInterval(arr, interval);
  console.info(expect, ret, expect === ret);
});
