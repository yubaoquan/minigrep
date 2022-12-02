// https://blog.csdn.net/NoneKey/article/details/41803075
/* eslint-disable @typescript-eslint/no-shadow */
const Y = (fun) => ((f) => f(f))((f) => fun((x) => f(f)(x)));

const fibonacci = Y((g) => {
  const fibonacci = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return g(n - 1) + g(n - 2);
  };
  return fibonacci;
});

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
