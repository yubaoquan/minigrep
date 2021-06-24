// Excel表列序号
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xweb76/

function getNumberOfPos(char: string, pos: number) {
  let ret = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  for (let i = 0; i < pos; i += 1) ret *= 26;
  return ret;
}

function titleToNumber(s: string): number {
  return s.split('')
    .reduce((ret, cur, index) => ret + getNumberOfPos(cur, s.length - index - 1), 0);
}

type Case = [string, number];

export default function () {
  ([
    ['A', 1],
    ['AB', 28],
    ['ZY', 701],
  ] as Case[]).forEach(([title, expect]) => {
    const result = titleToNumber(title);
    console.info(title, expect, result, expect === result);
  });
}
