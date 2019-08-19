function getIntersectionNode(headA, headB) {
  let node = headA;
  while (node) {
    node.visited = true;
    node = node.next;
  }
  node = headB;
  while (node) {
    if (node.visited) { return node; }
    node = node.next;
  }
  return null;
}
