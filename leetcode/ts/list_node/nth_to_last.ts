/**
 * 返回倒数第 k 个节点
 * https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */

import ListNode from '../def/list_node.ts';

export function kthToLast(head: ListNode | null, k: number): number {
  let node1: ListNode = head!;
  let node2: ListNode = head!;

  for (let i = 0; i < k; i += 1) {
    node2 = node2.next!;
  }

  while (node2) {
    node1 = node1.next!;
    node2 = node2.next!;
  }

  return node1.val;
}

export function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let node1: ListNode = head!;
  let node2: ListNode = head!;

  for (let i = 0; i < k; i += 1) {
    node2 = node2.next!;
  }

  while (node2) {
    node1 = node1.next!;
    node2 = node2.next!;
  }

  return node1;
}
