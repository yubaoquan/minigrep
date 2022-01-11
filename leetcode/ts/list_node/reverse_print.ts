/**
 * 从尾到头打印链表
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */

import type ListNode from '../def/list_node.ts';

export function reversePrint(head: ListNode | null): number[] {
  if (!head) return [];
  let node: ListNode | null = head;
  const ret: number[] = [];

  while (node) {
    ret.unshift(node.val);
    node = node.next;
  }

  return ret;
}
