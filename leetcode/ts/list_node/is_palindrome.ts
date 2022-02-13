/**
 * 回文链表
 * https://leetcode-cn.com/problems/palindrome-linked-list-lcci/
 */

import type ListNode from '../def/list_node.ts';

export function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;
  let node: ListNode | null = head;
  const stack: ListNode[] = [];

  while (node) {
    stack.unshift(node);
    node = node.next;
  }

  node = head;
  for (let i = 0; i < stack.length; i += 1) {
    if (stack[i].val !== node!.val) return false;
    node = node!.next;
  }
  return true;
}
