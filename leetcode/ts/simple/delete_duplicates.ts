/**
 * 删除排序链表中的重复元素
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

// Definition for singly-linked list.
class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let cursor = head;
  while (cursor.next) {
    if (cursor.val === cursor.next.val) cursor.next = cursor.next.next;
    else cursor = cursor.next;
  }
  return head;
}
