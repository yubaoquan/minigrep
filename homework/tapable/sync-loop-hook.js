const { SyncLoopHook } = require('tapable');

const hook = new SyncLoopHook(['name', 'age']);

let counter = 0;

hook.tap('fn1', (name, age) => {
  console.info('fn1', name, age, counter);
  counter++;
  return counter < 10 ? true : undefined;
});

hook.tap('fn2', (name, age) => {
  console.info('fn2', name, age, counter);
  counter++;
  return counter < 20 ? true : undefined;
});

hook.tap('fn3', (name, age) => {
  console.info('fn3', name, age, counter);
  counter++;
  return counter < 30 ? true : undefined;
});

hook.call('aaa', 123);
