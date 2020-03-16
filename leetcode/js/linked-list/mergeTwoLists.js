/**
 * 合并两个有序链表
 * https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/762/
 */
export default function mergeTwoLists(a, b) {
  let l1 = a;
  let l2 = b;
  if (!l1 && !l2) return l1;

  const result = {};
  let node = result;
  while (l1 || l2) {
    if (l1 && l2) if (l1.val <= l2.val) {
      node.val = l1.val;
      l1 = l1.next;
    } else {
      node.val = l2.val;
      l2 = l2.next;
    }
    else {
      const listNode = l1 || l2;
      node.val = listNode.val;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
    if (!l1 && !l2) return result;

    node.next = {};
    node = node.next;
  }
}
