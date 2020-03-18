// https://leetcode-cn.com/explore/featured/card/recursion-i/260/conclusion/1231/
function kthGrammar(n, k) {
  if (n === 1) return 0;
  const parent = kthGrammar(n - 1, Math.floor((k + 1) / 2));
  return parent === 0 ? 1 - (k % 2) : k % 2;
}


export default function() {
  [
    [[1, 1], 0],
    [[2, 1], 0],
    [[2, 2], 1],
    [[4, 5], 1],
    [[3, 2], 1],
  ].forEach(([[n, k], result]) => {
    console.info(kthGrammar(n, k), result);
  });
}
