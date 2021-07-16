const Queue = require('./queue.js');
const LinkedList = require('./linked-list.js');

function testQueue() {
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  console.info(queue.dequeue());
  console.info(queue.dequeue());
  console.info(queue.dequeue());
}

function testLinkedList() {
  const list = new LinkedList();

  list.add(1);
  list.add(2);
  list.add(3);
  list.show();

  list.add(4, 0);
  list.add(5, 1);
  list.show();

  list.remove(3);
  list.show();
}

testQueue();
testLinkedList();
