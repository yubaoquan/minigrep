// eslint-disable-next-line @typescript-eslint/no-shadow
const f = (f: Function) => {
  const g = (n: number) => f(f)(n);

  const fibonacci = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return g(n - 1) + g(n - 2);
  };

  return fibonacci;
};

const fibonacci = f(f);
console.log(fibonacci(3));
