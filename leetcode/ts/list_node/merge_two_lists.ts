/**
 * 合并两个排序的链表
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 */

import ListNode from '../def/list_node.ts';

export function mergeTwoLists(a: ListNode | null, b: ListNode | null): ListNode | null {
  let l1 = a;
  let l2 = b;
  if (!l1 && !l2) return l1;

  const result = new ListNode(0);
  let node = result;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val <= l2.val) {
        node.val = l1.val;
        l1 = l1.next;
      } else {
        node.val = l2.val;
        l2 = l2.next;
      }
    } else {
      const listNode = l1 || l2;
      node.val = listNode!.val;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
    if (!l1 && !l2) return result;

    node.next = new ListNode(0);
    node = node.next;
  }
  return result;
}
