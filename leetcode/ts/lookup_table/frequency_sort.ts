// 根据字符出现频率排序
// https://leetcode-cn.com/leetbook/read/all-about-lockup-table/fc4ic/

function frequencySort(s: string): string {
  const map: Record<string, number> = {};
  for (let i = 0; i < s.length; i += 1) {
    const c = s[i];
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  const entries: [string, number][] = Object.entries(map);
  entries.sort(([, count1], [,count2]) => count2 - count1);
  return entries.reduce((ret, [key, value]) => {
    let r = ret;
    for (let i = 0; i < value; i += 1) {
      r += key;
    }
    return r;
  }, '');
}

export type Case = [string, string];

([
  ['tree', 'eert'],
  ['cccaaa', 'cccaaa'],
  ['Aabb', 'bbAa'],
] as Case[]).forEach(([input, expect]) => {
  const actual = frequencySort(input);
  console.info(expect, actual, expect === actual);
});
