/**
 * 字母异位词分组
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xvaszc/
 */

function groupAnagrams(strs: string[]): string[][] {
  const record: any = {};

  function check(rec: any, str: string) {
    const key = str.split('').sort().join('');
    if (rec[key]) rec[key].push(str);
    else rec[key] = [str];
  }

  strs.forEach(str => check(record, str));
  return Object.values(record);
}

export default function() {
  const ret = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
  console.info(ret);
}