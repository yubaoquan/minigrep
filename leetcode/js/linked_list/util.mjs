// @ts-nocheck
function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.display = function () {
  let current = this;
  const arr = [];
  while (current && current.next) {
    arr.push(current.val);
    current = current.next;
  }
  if (current) arr.push(current.val);

  console.info(arr.join(', '));
  console.info('=========================');
};

export function makeList(arr) {
  const nodes = arr.map((val) => new ListNode(val));
  nodes.forEach((t, i) => {
    t.next = nodes[i + 1];
  });
  return nodes[0];
}
