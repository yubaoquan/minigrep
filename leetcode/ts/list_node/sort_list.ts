/** 链表排序 */
/** https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1040/ */

import ListNode from '../def/list_node.ts';

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const nodes: ListNode[] = [];
  let node: ListNode | null = head;
  while (node) {
    nodes.push(node);
    node = node.next;
  }

  nodes.sort((a, b) => a.val - b.val);
  nodes.forEach((item, i) => {
    item.next = nodes[i + 1] || null;
  });
  return nodes[0];
}

const list = ListNode.getNodes([4, 2, 1, 3]);
const newHead = sortList(list[0]);
console.info(newHead);

export { sortList };
