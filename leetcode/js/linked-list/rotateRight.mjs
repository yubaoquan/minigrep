// https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/767/

import { makeList } from './util.mjs';

function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.display = function() {
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

function rotateRight(head, k) {
  let current = head;
  if (!head || !k) return head;
  const arr = [];
  while (current) {
    arr.push(current);
    current = current.next;
  }
  const modedK = k % arr.length;
  if (modedK === 0) return head;
  arr[arr.length - 1].next = head;
  arr[arr.length - modedK - 1].next = null;


  return arr[arr.length - modedK];
}

export default function() {
  [
    [[1, 2, 3, 4, 5], 2],
    [[1, 2], 1],
    [[0, 1, 2], 4],
  ].forEach(([array, step]) => {
    const list = makeList(array);
    list.display();

    const res = rotateRight(list, step);
    res.display();
  });
}
