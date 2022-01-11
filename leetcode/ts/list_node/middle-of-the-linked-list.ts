/**
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 */
import type ListNode from '../def/list_node.ts';

export const middleNode = (head: ListNode | null): ListNode | null => {
  if (!head) return head;
  let slow: ListNode = head;
  let fast: ListNode | null = head;

  while (fast?.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  return slow;
};
