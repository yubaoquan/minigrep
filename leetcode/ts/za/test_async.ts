// https://muyiy.cn/question/async/8.html
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

async function test() {
  console.info('start');
  new Promise(resolve => {
    console.info('promise');
    resolve(undefined);
  }).then(() => {
    console.info('then1');
  }).then(() => {
    console.info('then2');
  });

  setTimeout(() => {
    console.info('timeout1');

    new Promise(resolve => {
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

test();
