/**
 * 移除重复节点
 * https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 */
import type ListNode from '../def/list_node.ts';

export function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const memo: Record<number, boolean> = {};
  memo[head.val] = true;
  let node: ListNode | null = head;

  while (node?.next) {
    if (memo[node.next.val]) node.next = node.next.next;
    else {
      memo[node.next.val] = true;
      node = node.next;
    }
  }
  return head;
}
