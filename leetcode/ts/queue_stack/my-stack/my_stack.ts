/**
 * 用队列实现栈
 * https://leetcode-cn.com/leetbook/read/queue-stack/gw7fg/
 * https://leetcode-cn.com/problems/min-stack-lcci/
 * 使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

 */

// https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/comments/259777

import Node from './node.ts';

class MyStack {
  head: Node | null = null;

  push(x: number): void {
    this.head = this.head
      ? new Node(x, Math.min(this.head.min, x), this.head)
      : new Node(x, x, null);
  }

  pop(): void {
    this.head = this.head!.next;
  }

  top(): number {
    return this.head!.val;
  }

  min(): number {
    return this.head!.min;
  }

  empty(): boolean {
    return !this.head;
  }
}

export default () => {
  const obj = new MyStack();
  obj.push(1);
};
