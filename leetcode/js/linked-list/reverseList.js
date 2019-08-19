function reverseList(head) {
  if (!head) {
    return head;
  }
  let cur = head;
  let node = head.next;
  while (node.next) {
    let next = node.next;
    node.next = cur;
    head.next = next;
    cur = node;
    node = next;
  }
  return head;
}
