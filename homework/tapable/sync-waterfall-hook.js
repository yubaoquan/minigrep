const { SyncWaterfallHook } = require('tapable');

const hook = new SyncWaterfallHook(['name', 'age']);

hook.tap('fn1', (name, age) => {
  console.info('fn1', name, age);
  return 'ret1';
});

hook.tap('fn2', (name, age) => {
  console.info('fn2', name, age);
  return 'ret2';
});

hook.tap('fn3', (name, age) => {
  console.info('fn3', name, age);
  return 'ret3';
});

hook.call('aaa', 123);
