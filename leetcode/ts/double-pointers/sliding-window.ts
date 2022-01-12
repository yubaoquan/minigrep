/* 滑动窗⼝算法框架 */
/* eslint-disable */
export const slidingWindow = (s: string, t: string) => {
  const need: Record<string, number> = {};
  // const tWindow;

  for (let i = 0; i < t.length; i += 1) {
    need[t[i]] = need[t[i]] ? need[t[i]] + 1 : 1;
  }

  let left = 0;
  let right = 0;
  const valid = 0;
  while (right < s.length) {
  // c 是将移⼊窗⼝的字符
    const c = s[right];

    // 右移窗⼝
    right++;

    // 进⾏窗⼝内数据的⼀系列更新
    // ...
    /** * debug 输出的位置 ** */
    console.info(left, right);

    /** ***************** */
    // 判断左侧窗⼝是否要收缩
    while (/* window needs shrink */ true) {
      // d 是将移出窗⼝的字符
      const d = s[left];

      // 左移窗⼝
      left++;

      // 进⾏窗⼝内数据的⼀系列更新
      // ...
    }
  }
};
