/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */
import ListNode from '../def/list_node.ts';

export const mergeTwoLists = (a: ListNode | null, b: ListNode | null) => {
  let l1 = a;
  let l2 = b;
  if (!l1 || !l2) return l1 || l2;

  const result = new ListNode(-1);
  let node = result;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }

  node.next = l1 || l2;
  return result.next;
};
