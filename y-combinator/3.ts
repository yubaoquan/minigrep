/* eslint-disable @typescript-eslint/no-shadow */
const Y = (fun: Function) => {
  const f = (f: Function) => fun((n: any) => f(f)(n));

  return f(f); // 8
};

const fun = (g: Function) => {
  const fibonacci = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return g(n - 1) + g(n - 2);
  };
  return fibonacci;
};

const fibonacci = Y(fun);
console.log(fibonacci(6));
