// https://juejin.cn/post/6866082181455249422#heading-14

class Scheduler {
  limit = 0;

  concurrent = 0;

  stack: Function[] = [];

  constructor(limit = 2) {
    this.limit = limit;
  }

  async add(promiseCreator: () => Promise<any>) {
    if (this.concurrent < this.limit) {
      this.concurrent++;

      try {
        await promiseCreator();
        this.concurrent--;
        this.next();
      } catch (e) {
        console.error(e);
      }

      return;
    }

    let resolve: Function;
    const p = new Promise((r) => {
      resolve = r;
    });

    this.stack.push(async () => {
      try {
        await promiseCreator();
        resolve();
        this.concurrent--;
        this.next();
      } catch (e) {
        console.error(e);
      }
    });

    return p;
  }

  next() {
    if (this.stack.length > 0 && this.concurrent < this.limit) {
      const p = this.stack.shift()!;
      this.concurrent++;
      p();
    }
  }
}

const test = () => {
  const timeout = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
  const scheduler = new Scheduler();

  const addTask = async (time: number, order: number) => {
    try {
      await scheduler.add(() => timeout(time));
      console.log(order);
    } catch (e) {
      console.error(e);
    }
  };

  addTask(1000, 1);
  addTask(500, 2);
  addTask(300, 3);
  addTask(400, 4);
};

test();
