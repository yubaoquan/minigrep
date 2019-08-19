/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.len = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.len) {
    return -1;
  }
  let current = this.head;
  let pos = 0;
  while (current.next && pos < index) {
    current = current.next;
    pos ++;
  }
  return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = {
    val,
    next: this.head,
  };
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.len ++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = { val, next: null };
  this.tail.next = node;
  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.len ++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.len) { return; }
  if (index <= 0) { return this.addAtHead(val); }
  if (index === this.len) { return this.addAtTail(val) }

  let current = this.head;
  let pos = 0;
  while (current.next && pos < index - 1) {
    current = current.next;
    pos ++;
  }
  const nextnext = current.next;
  current.next = { val, next: nextnext }
  this.len++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index > this.len - 1) { return }
  let current = this.head;
  let pos = 0;
  this.len --;
  if (index === 0) {
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return;
  }
  while (current.next && pos < index - 1) {
    current = current.next;
    pos ++;
  }
  current.next = current.next.next;
  if (!current.next) {
    this.tail = current;
  }
};

MyLinkedList.prototype.display = function() {
  let current = this.head;
  const arr = [];
  if (this.head) {
    while (current && current.next) {
      arr.push(current.val);
      current = current.next;
    }
    arr.push(current.val);
  }

  console.info(arr.join(', '));
  console.info(`=========================`);
}

var obj = new MyLinkedList();

const { methods, params } = require('./case4.js');

methods.forEach((methodName, i) => {
  const args = params[i];
  console.info(`Now exec method ${i}: ${methodName}, params: ${args}`);
  const ret = obj[methodName](...args);
  console.info('result', ret);
  obj.display();
});
