export class CQueue {
  stack1: number[] = [];

  stack2: number[] = [];

  appendTail(value: number): void {
    this.stack1.unshift(value);
  }

  deleteHead(): number {
    if (!this.stack1.length) return -1;
    while (this.stack1.length > 1) {
      this.stack2.unshift(this.stack1.shift()!);
    }
    const head = this.stack1.shift()!;

    while (this.stack2.length) {
      this.stack1.unshift(this.stack2.shift()!);
    }

    return head;
  }
}
