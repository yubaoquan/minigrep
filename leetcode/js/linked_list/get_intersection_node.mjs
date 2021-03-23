/**
 * 两个链表的第一个公共节点
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 */

export function getIntersectionNode2(headA, headB) {
  let node = headA;
  while (node) {
    node.visited = true;
    node = node.next;
  }

  node = headB;
  while (node) {
    if (node.visited) return node;
    node = node.next;
  }
}

// https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/shuang-zhi-zhen-fa-lang-man-xiang-yu-by-ml-zimingm/
export function getIntersectionNode(headA, headB) {
  while (headA !== headB) {
    headA = headA?.next || headB;
    headB = headB?.next || headA;
  }

  return headA;
}
