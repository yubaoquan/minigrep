type element = number | undefined

class MyCircularQueue {
  queue: element[] = []

  maxLength = 0

  head = -1

  tail = -1

  count = 0

  constructor(k: number) {
    this.maxLength = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.head = this.head === -1 ? 0 : this.head;

    this.count += 1;
    if (this.tail === -1) this.tail = 0;
    else this.tail = (this.tail + 1) % this.maxLength;
    this.queue[this.tail] = value;

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.queue[this.head] = undefined;
    this.count -= 1;
    if (this.isEmpty()) {
      this.head = -1;
      this.tail = -1;
    } else this.head = (this.head + 1) % this.maxLength;

    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    const val = this.queue[this.head];

    return val === undefined ? -1 : val;
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    const val = this.queue[this.tail];

    return val === undefined ? -1 : val;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.maxLength;
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
*/


export default function() {
  const obj = new MyCircularQueue(3);

  const arr = [
    obj.enQueue(1),
    obj.enQueue(2),
    obj.enQueue(3),
    obj.enQueue(4),
    obj.Rear(),
    obj.isFull(),
    obj.deQueue(),
    obj.enQueue(4),
    obj.Rear(),
  ];

  console.info(arr);
}
