// 字符串的排列
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1016/

function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;
  const sortedS1 = s1.split('').sort().join('');

  for (let i = 0; i <= s2.length - s1.length; i += 1) {
    const sortedSubStr = s2.slice(i, i + s1.length).split('').sort().join('');
    if (sortedS1 === sortedSubStr) return true;
  }
  return false;
}

export type Case = [string, string, boolean];

([
  ['adc', 'dcda', true],
  ['ab', 'eidbaooo', true],
  ['ab', 'eidboaoo', false],
] as Case[]).forEach(([s1, s2, expect]) => {
  const actual = checkInclusion(s1, s2);
  console.info(expect === actual);
});
