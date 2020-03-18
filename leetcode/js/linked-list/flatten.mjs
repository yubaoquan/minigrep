/*
  扁平化多级双向链表
  https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/764/
*/

function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

Node.prototype.display = function() {
  let current = this;
  const arr = [];
  while (current && current.next) {
    arr.push(current.val);
    current = current.next;
  }
  if (current) arr.push(current.val);

  console.info(arr.join(', '));
  console.info('=========================');
};

let count = 0;

function flatten(head) {
  let node = head;
  let hasChild = false;
  while (node) {
    count += 1;
    if (count > 1000) throw new Error('infinit loop');
    const { child } = node;
    node.child = null;
    hasChild = child;
    if (!child) {
      node = node.next;
      if (!node && !hasChild) return head;

      continue;
    }
    const subList = flatten(child);
    subList.prev = node;
    const tail = getListTail(subList);
    tail.next = node.next;
    if (node.next) node.next.prev = tail;
    node.next = subList;
    node = node.next;
    if (node) continue;
    if (!hasChild) return head;
    node = head;
    hasChild = false;
  }
  return head;
}

function getListTail(head) {
  let node = head;
  while (node && node.next) node = node.next;

  return node;
}

function linkNodes(a, b) {
  a.next = b;
  b.prev = a;
}

function setChild(a, b) {
  a.child = b;
}

export default function() {
  const nodes = new Array(13).fill(null).map((t, i) => new Node(i));
  linkNodes(nodes[1], nodes[2]);
  linkNodes(nodes[2], nodes[3]);
  linkNodes(nodes[3], nodes[4]);
  linkNodes(nodes[4], nodes[5]);
  linkNodes(nodes[5], nodes[6]);
  linkNodes(nodes[7], nodes[8]);
  linkNodes(nodes[8], nodes[9]);
  linkNodes(nodes[9], nodes[10]);
  linkNodes(nodes[11], nodes[12]);
  setChild(nodes[3], nodes[7]);
  setChild(nodes[8], nodes[11]);

  const res = flatten(nodes[1]);
  res.display();
}
