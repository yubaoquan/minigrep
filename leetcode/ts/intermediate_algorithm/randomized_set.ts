// 常数时间插入、删除和获取随机元素
// https://leetcode-cn.com/leetbook/read/top-interview-questions-medium/xw5rt1/

class RandomizedSet {
  memo: Record<string, boolean> = {};

  data: Record<string, number> = {};

  insert(val: number): boolean {
    if (this.memo[val]) return false;
    this.data[val] = val;
    this.memo[val] = true;
    return true;
  }

  remove(val: number): boolean {
    if (!this.memo[val]) return false;
    delete this.memo[val];
    delete this.data[val];
    return true;
  }

  getRandom(): number {
    const values = Object.values(this.data) as number[];
    const index = Math.floor(Math.random() * values.length);
    return values[index];
  }
}

export default () => {
  const set = new RandomizedSet();

  [
    set.insert(1),
    set.remove(2),
    set.insert(2),
    set.getRandom(),
    set.remove(1),
    set.insert(2),
    set.getRandom(),
  ].forEach((ret) => console.info(ret));
};
