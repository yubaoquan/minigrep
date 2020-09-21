function removeElements(h, val) {
  let head = h;
  if (!head) return null;
  while (head && head.val === val) head = head.next;

  let node = head;
  while (node && node.next) {
    while (node.next && node.next.val === val) node.next = node.next.next;

    node = node.next;
  }
  return head;
}

const nodes = new Array(6).fill(0).map((t, i) => ({ val: i + 1 }));
nodes.forEach((t, i) => (t.next = nodes[i + 1]));
console.info(nodes[0]);
const head = removeElements(nodes[0], 6);
console.info(head);
console.info(nodes);
