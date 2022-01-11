/**
 * 反转链表
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 */

import ListNode from '../def/list_node.ts';

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let pre = head;
  let cur = head.next;
  let { next } = cur;

  head.next = null;
  cur.next = head;

  while (next) {
    const nextNext: ListNode | null = next.next;
    cur.next = pre;
    next.next = cur;
    pre = cur;
    cur = next;
    next = nextNext;
  }
  return cur;
}

function show(inputNode: ListNode | null) {
  let node = inputNode;
  const ret: number[] = [];
  while (node) {
    ret.push(node.val);
    node = node.next;
  }
  console.info(ret);
}

function genList(arr: number[]): ListNode | null {
  const nodes = arr.map((n) => new ListNode(n));
  nodes.forEach((node, i) => {
    node.next = nodes[i + 1] || null;
  });
  return nodes[0] || null;
}

/* eslint-disable prettier/prettier */
[
  [],
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
].forEach((arr) => {
  /* eslint-enable prettier/prettier */
  const head = genList(arr);
  const reversed = reverseList(head);
  show(reversed);
});
