const { makeList } = require('./util.js.js');

function addTwoNumbers(a, b) {
  let l1 = a;
  let l2 = b;
  const result = { val: null };
  let node = result;
  let inc = 0; // 进位

  while (true) {
    let sum = inc;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    inc = sum >= 10 ? 1 : 0;
    node.val = sum % 10;

    if (l1 || l2 || inc) {
      node.next = { val: 0 };
      node = node.next;
    } else return result;
  }
}

module.exports = function() {
  const a = makeList([5]);
  const b = makeList([5]);

  const result = addTwoNumbers(a, b);
  console.info(result);
};
