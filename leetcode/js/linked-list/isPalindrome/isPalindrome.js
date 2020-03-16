function isPalindrome(head) {
  if (!head || !head.next) return true;

  if (!head.next.next) return head.val === head.next.val;

  let slow = head;
  let fast = head;
  let len = 0;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    len += 1;
  }

  const isEven = !fast.next;
  if (fast.next) {
    slow = slow.next;
    fast = fast.next;
    len += 1;
  }

  // 基数个节点, 从中间偏右作为后半截链表的开始
  if (isEven) slow = slow.next;


  const head2 = reverseList(slow);
  let node1 = head;
  let node2 = head2;

  for (let i = 0; i < len; i++) {
    if (node1.val !== node2.val) return false;

    node1 = node1.next;
    node2 = node2.next;
  }
  return true;
}

function reverseList(head) {
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

const testCases = [
  {
    arr: [1, 0, 0],
    expect: false,
  }, {
    arr: [1, 0, 1, 1],
    expect: false,
  }, {
    arr: [1, 0, 1],
    expect: true,
  }, {
    arr: [1, 4, -1, -1, 4, 1],
    expect: true,
  }, {
    arr: [1, 2, 2, 1],
    expect: true,
  },
];

testCases.forEach(({ arr, expect }, index) => {
  const nodes = arr.map(val => ({ val }));
  nodes.forEach((t, i) => (t.next = nodes[i + 1]));
  const result = isPalindrome(nodes[0]);
  if (result !== expect) throw new Error(`Test Case${index} not pass`);
  else console.info(`Test Case${index} pass`);
});
