/* eslint-disable no-param-reassign */
const STATUS_PENDING = 'pending';
const STATUS_FULFILLED = 'fulfilled';
const STATUS_REJECTED = 'rejected';

export class MyPromise {
  static resolve(val) {
    return val instanceof MyPromise
      ? val
      : new MyPromise((resolve) => resolve(val));
  }

  static reject(val) {
    return val instanceof MyPromise
      ? val
      : new MyPromise((resolve, reject) => reject(val));
  }

  static all(tasks) {
    const res = [];

    return new MyPromise((resolve, reject) => {
      if (!tasks.length) resolve([]);
      let settledCount = 0;
      tasks.forEach((task, index) => {
        if (task instanceof MyPromise) {
          task
            .then((v) => {
              res[index] = v;
              settledCount += 1;
              if (settledCount === tasks.length) resolve(res);
            })
            .catch(reject);
        } else {
          res[index] = task;
          settledCount += 1;
          if (settledCount === tasks.length) resolve(res);
        }
      });
    });
  }

  static race(tasks) {
    const errors = [];
    let errorsCount = 0;

    return new MyPromise((resolve, reject) => {
      tasks.forEach((task, index) => {
        if (task instanceof MyPromise) {
          task
            .then(resolve)
            .catch((e) => {
              errors[index] = e;
              errorsCount += 1;
              if (errorsCount === tasks.length) reject(errors[0]);
            });
        } else {
          resolve(task);
        }
      });
    });
  }

  status = STATUS_PENDING;

  successVal;

  failVal;

  fulfilledHandlers = [];

  rejectedHandlers = [];

  constructor(fn) {
    try {
      fn(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  resolve = (val) => {
    if (this.status !== STATUS_PENDING) return;
    this.status = STATUS_FULFILLED;
    this.successVal = val;
    while (this.fulfilledHandlers.length) this.fulfilledHandlers.shift()();
  };

  reject = (val) => {
    if (this.status !== STATUS_PENDING) return;
    this.status = STATUS_REJECTED;
    this.failVal = val;
    while (this.rejectedHandlers.length) this.rejectedHandlers.shift()();
  };

  // eslint-disable-next-line class-methods-use-this
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') onFulfilled = (v) => v;
    if (typeof onRejected !== 'function') {
      onRejected = (v) => {
        throw v;
      };
    }

    const promise2 = new MyPromise((resolve, reject) => {
      const next = (getResult) => () => {
        setTimeout(() => {
          try {
            const x = getResult();
            if (x === promise2) return reject(new Error('循环'));
            return x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
          } catch (e) {
            reject(e);
          }
        });
      };

      const success = next(() => onFulfilled(this.successVal));
      const fail = next(() => onRejected(this.failVal));

      if (this.status === STATUS_PENDING) {
        this.fulfilledHandlers.push(success);
        this.rejectedHandlers.push(fail);
      }

      if (this.status === STATUS_FULFILLED) success();
      if (this.status === STATUS_REJECTED) fail();
    });

    return promise2;
  }

  catch(fn) {
    return this.then(null, fn);
  }

  finally(fn) {
    return this.then(
      (v) => MyPromise.resolve(fn()).then(() => v),
      (v) => MyPromise.reject(fn()).then(() => {
        throw v;
      }),
    );
  }
}
