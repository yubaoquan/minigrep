/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

import type ListNode from '../def/list_node.ts';

let successor: ListNode | null = null;

const reverseN = (head: ListNode | null, n: number): ListNode | null => {
  if (!head) return head;
  if (n === 1) {
    successor = head.next;
    return head;
  }

  const last = reverseN(head.next, n - 1);
  if (!head.next) throw Error(`List is not long enough. N: ${n}`);
  head.next.next = head;
  head.next = successor;
  return last;
};

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  if (!head) return head;
  if (left === 1) return reverseN(head, right);
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
}
