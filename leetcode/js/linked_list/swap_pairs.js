function swapPairs(h) {
  let head = h;
  if (!head || !head.next) return head;

  const second = head.next;
  const { next } = second;
  second.next = head;
  head.next = swapPairs(next);
  head = second;
  return head;
}

const nodes = new Array(4).fill(0).map((t, i) => ({ val: i + 1 }));
nodes.forEach((t, i) => {
  t.next = nodes[i + 1] || null;
});
swapPairs(nodes[0]);
console.info(nodes[1]);
