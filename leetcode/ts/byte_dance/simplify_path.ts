// 简化路径
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1013/

function simplifyPath(path: string): string {
  let ret = path
    .replace(/\.\.\./g, '%%%')
    .replace(/\.+\w/, (match) => match.replace(/\./g, '%'));

  const regAndReplace: [RegExp, string][] = [
    [/^\/\.\.\//g, '/'],
    [/[^.]\.\//g, '/'],
    [/[/]+$/, ''],
    [/\/{2,}/g, '/'],
    [/^((\/)|(\.\.))/g, ''],
  ];

  while (regAndReplace.some(([reg]) => ret.match(reg))) {
    ret = regAndReplace
      .reduce(
        (finalStr, [reg, replaceTo]) => finalStr.replace(reg, replaceTo),
        ret,
      );
  }

  const parts = ret.split('/');

  for (let i = 0; i < parts.length;) {
    while (parts[0] === '..') parts.shift();
    if (parts[i + 1] === '..') {
      parts.splice(i, 2);
      i = Math.max(0, i - 1);
    } else {
      i += 1;
    }
  }

  return `/${parts.filter((part) => part !== '.').join('/')}`.replace(/%/g, '.');
}

export type Case = [string, string];

let pass = true;
([
  ['/home/of/foo/../../bar/../../is/./here/.', '/is/here'],
  ['/home/../../..', '/'],
  ['/abc/...', '/abc/...'],
  ['/.../', '/...'],
  ['/...', '/...'],
  ['/.', '/'],
  ['/a/../../b/../c//.//', '/c'],
  ['/a/./b/../../c/', '/c'],
  ['/../', '/'],
  ['/home/', '/home'],
  ['/home//foo/', '/home/foo'],
  ['/a//b////c/d//././/..', '/a/b/c'],
] as Case[]).forEach(([str, expect]) => {
  const actual = simplifyPath(str);

  // console.info(expect === actual);
  // console.info('===========================');
  if (expect !== actual) {
    pass = false;
    console.info(str);
    console.info(expect);
    console.info(actual);
  }
});

console.info(pass);
