/**
 * 字符串解码
 * https://leetcode-cn.com/leetbook/read/queue-stack/gdwjv/
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

 */

function decodeString(s: string): string {
  if (!s || !s.includes('[')) return s;

  const stack: string[] = [];
  let curStr = '';
  let curNum = '';

  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) { // 读到数字, 入栈之前拼好的字符串
      curNum += s[i];
      if (curStr) stack.push(curStr);
      curStr = '';
    } else if (s[i] === '[') { // 读到[, 入栈之前拼好的数字
      stack.push(curNum);
      curNum = '';
    } else if (s[i] === ']') { // 读到], 出栈
      const str = stack.pop()!;

      if (/\d+/.test(str)) { // 出栈数字
        curStr = repeat(curStr, +str);
      } else { // 出栈同级的字符串, 遇到]至少要有一个数字出栈, 所以下标-1
        curStr = str + curStr;
        i -= 1;
      }
    } else { // 读到英文字母, 拼接到字符串上
      curStr += s[i];
    }
  }

  while (stack.length) {
    const str = stack.pop()!;
    curStr = /\d+/.test(str) ? repeat(curStr, +str) : str + curStr;
  }

  return curStr;
}

function repeat(str: string, n: number): string {
  let ret = '';
  for (let i = 0; i < n; i++) ret += str;

  return ret;
}

type Case = [string, string];

export default function() {
  ([
    ['3[z]2[2[y]pq4[2[jk]e1[f]]]ef', 'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef'],
    ['3[a2[c]]', 'accaccacc'],
    ['3[a]2[bc]', 'aaabcbc'],
    ['2[abc]3[cd]ef', 'abcabccdcdcdef'],
    ['abc3[cd]xyz', 'abccdcdcdxyz'],
  ] as Case[]).forEach(([s, expect]) => {
    const result = decodeString(s);

    // console.info(result);
    console.info(result === expect);
  });
}
