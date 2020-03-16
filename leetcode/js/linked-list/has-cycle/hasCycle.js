export default function hasCycle(head) {
  if (!head || !head.next) return false;

  let node = head.next;
  while (node.next) {
    if (node.visited) return true;

    node.visited = true;
    node = node.next;
  }
  return false;
}
