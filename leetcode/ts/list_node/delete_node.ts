/**
 * 删除链表的节点
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 */
import type ListNode from '../def/list_node.ts';

export function deleteNode(
  head: ListNode | null,
  val: number,
): ListNode | null {
  if (!head) return head;
  if (head.val === val) return head.next;

  let cur: ListNode | null = head;
  while (cur?.next) {
    if (cur.next.val === val) cur.next = cur.next.next;
    cur = cur.next;
  }

  return head;
}
