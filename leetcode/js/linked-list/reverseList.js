export default function reverseList(head) {
  if (!head) return head;

  let cur = head;
  let node = head.next;
  while (node) {
    const { next } = node;
    node.next = cur;
    head.next = next;
    cur = node;
    node = next;
  }
  return cur;
}
