// 简化路径
// https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1013/

function simplifyPath(path: string): string {
  let ret = path
    .replace(/\.\.\./g, '%%%')
    .replace(/\.+\w/, match => match.replace(/\./g, '%'));

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
    if (parts[i] === '..' && i === 0) {
      parts.shift();
      continue;
    }
    if (parts[i] !== '..' && parts[i + 1] === '..') {
      parts.splice(i, 2);
      if (i > 0) i--;
      continue;
    }
    i++;
  }

  return `/${parts.filter(part => part !== '.').join('/')}`.replace(/%/g, '.');
}

export type Case = [string, string];

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
  console.info(expect);
  console.info(actual);
  console.info(expect === actual);
  console.info('===========================');
});
