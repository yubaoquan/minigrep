// https://muyiy.cn/question/async/8.html
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function test() {
  console.info('start');
  new Promise((resolve) => {
    console.info('promise');
    resolve(undefined);
  }).then(() => {
    console.info('then1');
  }).then(() => {
    console.info('then2');
  });

  setTimeout(() => {
    console.info('timeout1');

    new Promise((resolve) => {
      console.info('promise in timeout1');
      resolve(undefined);
    }).then(() => {
      console.info('then1 in timeout1');
    }).then(() => {
      console.info('then2 in timeout1');
    });
  }, 10);

  setTimeout(() => {
    console.info('timeout2');
  }, 10);
  console.info('end');
}

// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7
async function test2() {
  async function async1() {
    console.log('async1 start');

    async function async2() {
      console.log('async2');
    }

    await async2();
    console.log('async1 end');
  }

  console.log('script start');

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  async1();

  new Promise((resolve) => {
    console.log('promise1');
    resolve(undefined);
  }).then(() => {
    console.log('promise2');
  });

  console.log('script end');
}

// test();

test2();
