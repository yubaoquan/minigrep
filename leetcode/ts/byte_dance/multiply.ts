// 字符串相乘
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1015/

function multiply(num1: string, num2: string): string {
  const len1 = num1.length;
  const len2 = num2.length;
  const ret: number[] = Array(len1 + len2 + 1).fill(0);
  let lastSumInc = 0;

  for (let i = 0; i < len1; i += 1) {
    for (let j = 0; j < len2; j += 1) {
      const a = +num1[len1 - i - 1];
      const b = +num2[len2 - j - 1];
      let temp = (a * b) + '0'.repeat(i + j);

      // 对齐
      if (temp.length < ret.length) temp = '0'.repeat(ret.length - temp.length) + temp;

      lastSumInc = 0;
      for (let k = temp.length - 1; k >= 0; k -= 1) {
        const sum = +temp[k] + ret[k] + lastSumInc;
        ret[k] = sum % 10;
        lastSumInc = sum > 9 ? 1 : 0;
      }
    }
  }
  return ret.join('').replace(/^0+/, '') || '0';
}

export type Case = [string, string, string];
([
  ['0', '0', '0'],
  ['123', '456', '56088'],
  ['999', '999', '998001'],
  ['2', '3', '6'],
] as Case[]).forEach(([s1, s2, expect]) => {
  const actual = multiply(s1, s2);
  console.info(expect, actual, expect === actual);
});
