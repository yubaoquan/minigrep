/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 */
import type ListNode from '../def/list_node.ts';

export const getIntersectionNode = (
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null => {
  if (!headA || !headB) return null;

  let nodeA: ListNode | null = headA;
  let nodeB: ListNode | null = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }

  return nodeB;
};
