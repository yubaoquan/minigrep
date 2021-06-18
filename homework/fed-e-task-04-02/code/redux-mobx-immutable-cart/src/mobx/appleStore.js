import { makeAutoObservable, runInAction } from 'mobx';

export default class AppleStore {
  apples = [
    { id: 0, weight: 233, isEaten: false },
    { id: 1, weight: 235, isEaten: true },
    { id: 2, weight: 256, isEaten: false },
  ];

  newAppleId = 3;
  isPicking = false;
  buttonText = '摘苹果';

  constructor() {
    makeAutoObservable(this);
  }

  /**  计算当前已吃和未吃苹果的状态 */
  get status() {
    let status = {
      appleNow: { quantity: 0, weight: 0 },
      appleEaten: { quantity: 0, weight: 0 },
    };

    this.apples.forEach(apple => {
      let selector = apple.isEaten ? 'appleEaten' : 'appleNow';
      status[selector].quantity ++;
      status[selector].weight += apple.weight;
    });

    return status;
  }

  /*摘苹果的异步操作*/
  pickApple = async () => {
    /** 如果正在摘苹果，则结束这个thunk, 不执行摘苹果 */
    if (this.isPicking) return;

    this.isPicking = true;
    this.buttonText = '正在采摘...';
    try {
      const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
      /** 备注这里的url只是测试用的，这个是之前hackernews的api, 这里只是确保接口是通的，至于数据还是自己mock */
      runInAction(() => {
        let weight = Math.floor(200 + Math.random() * 50);
        this.isPicking = false;
        this.buttonText = '摘苹果';
        this.apples.push({
          id: this.newAppleId++,
          weight,
          isEaten: false,
        });
      })
    } catch (e) {
      console.error(e);
    }
  }

  /* 这里需要写成箭头函数的形式，这样此函数从父组件传递到子组件的时候才能调用成功*/
  eatApple = (appleId) => {
    const targetApple = this.apples.find(apple => apple.id === appleId);
    // targetApple?.isEaten = true;
    const a = targetApple?.isEaten
    console.info('isEaten:', a)
    if (targetApple) targetApple.isEaten = true;
  }
}
