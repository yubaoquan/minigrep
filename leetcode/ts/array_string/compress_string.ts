/**
 * 字符串压缩
 * https://leetcode-cn.com/problems/compress-string-lcci/
 */

function compressString(s: string): string {
  if (!s) return '';
  let ret = '';
  const arr = s.substr(1).split('');
  let currentChar = s[0];
  let count = 1;
  while (arr.length) {
    const char = arr.shift();
    if (currentChar === char) count++;
    else {
      ret += `${currentChar}${count}`;
      currentChar = char!;
      count = 1;
    }
  }
  ret = `${ret}${currentChar}${count}`;
  return ret.length >= s.length ? s : ret;
}

console.info(compressString('aabcccccaa'));
