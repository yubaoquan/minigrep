/** 全 O(1) 的数据结构 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/245/data-structure/1033/ */
// TODO 未完成. 十字链表代码太多, 过于麻烦

interface Item {
  val: number;
  max: string;
  min: string;
}

export class AllOne {
  memo: Record<string, Item> = {};

  max: string[] = [];

  min: string[] = [];

  inc(key: string): void {
    if (!this.memo[key]) {
      this.memo[key] = {
        val: 1,
      };
    }
    if (this.memo[key]) this.memo[key]++;
    else this.memo[key] = 1;
    this.updateMax(key);
    this.updateMin(key);
  }

  updateMax(key: string) {
    const { memo } = this;
    if (!this.max.length) return this.max.unshift(key);
    const maxKey = this.max[0];
    this.max.unshift(memo[key] > memo[maxKey] ? key : maxKey);
  }

  updateMin(key: string) {
    const { memo } = this;
    if (!this.min.length) return this.min.unshift(key);
    const minKey = this.min[0];
    this.min.unshift(memo[key] < memo[minKey] ? key : minKey);
  }

  dec(key: string): void {
    if (this.memo[key]) this.memo[key]--;
    if (!this.memo[key]) delete this.memo[key];
    if (this.max[0] === key) this.max.shift();
    if (this.min[0] === key) this.min.shift();
  }

  getMaxKey(): string {
    return this.max[0] || '';
  }

  getMinKey(): string {
    return this.min[0] || '';
  }
}
