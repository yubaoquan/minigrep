function makeList(arr) {
  const nodes = arr.map(val => ({ val }));
  nodes.forEach((t, i) => (t.next = nodes[i + 1]));
  return nodes[0];
}

exports.makeList = makeList;
