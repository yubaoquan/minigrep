export const afterResolve = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
      console.info(`after resolve`); // resolve 后的代码还会继续执行
    }, 100);
  });

  const result = await promise;
  console.info(result);
};

const noCatch = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error('fail'));
      console.info(`after resolve`); // resolve 后的代码还会继续执行
    }, 100);
  });

  promise.then(console.info);
};

noCatch();
