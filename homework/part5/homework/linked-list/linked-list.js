const Node = require('./node.js');

module.exports = class LinkedList {
  head;

  size = 0;

  add(val, idx) {
    const index = idx ?? this.size;
    console.info(`add(${val}, ${index})`);
    if (index < 0 || index > this.size) throw Error(`Invalid index ${index}`);

    if (!this.head) {
      this.head = new Node(val);
    } else if (index === 0) {
      this.head = new Node(val, this.head);
    } else {
      let node = this.head;
      let curPos = 0;
      while (curPos < index - 1) {
        console.info(curPos, index);
        node = node.next;
        curPos += 1;
      }
      node.next = new Node(val, node.next);
    }
    this.size += 1;
  }

  remove(index) {
    console.info(`remove(${index})`);
    if (index < 0 || index >= this.size) throw Error(`Invalid index ${index}`);
    if (index === 0) this.head = this.head.next;
    else {
      const node = this.getItem(index - 1);
      node.next = node.next.next;
    }
    this.size -= 1;
  }

  getItem(index) {
    if (index < 0 || index >= this.size) throw Error(`Invalid index ${index}`);
    let pos = 0;
    let node = this.head;
    while (pos < index) {
      node = node.next;
      pos += 1;
    }
    return node;
  }

  setItem(index, val) {
    return this.getItem(index)?.setVal(val);
  }

  show() {
    let node = this.head;
    const ret = [];
    while (node) {
      ret.push(node.val);
      node = node.next;
    }

    console.info(ret);
  }
};
