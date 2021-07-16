const Node = require('./node.js');

module.exports = class Queue {
  head;

  tail;

  constructor(val) {
    if (val !== undefined) {
      this.head = new Node(val);
      this.tail = this.head;
    }
  }

  enqueue(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      this.tail.setNext(new Node(val));
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (!this.head) throw Error('No data.');
    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = undefined;
    return oldHead.val;
  }

  clear() {
    this.head = undefined;
    this.tail = undefined;
  }
};
