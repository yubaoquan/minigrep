/** 最小栈 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/245/data-structure/1049/ */

interface Item {
  min: number;
  val: number;
}

class MinStack {
  stack: Item[] = [];

  push(val: number): void {
    if (!this.stack.length) {
      this.stack.unshift({ val, min: val });
    } else {
      const { min } = this.stack[0];
      this.stack.unshift({ val, min: val < min ? val : min });
    }
  }

  pop(): void {
    this.stack.shift();
  }

  top(): number {
    return this.stack[0].val;
  }

  getMin(): number {
    return this.stack[0].min;
  }
}

export { MinStack };
