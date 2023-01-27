// eslint-disable-next-line @typescript-eslint/no-shadow
const f = (f: Function) => {
  const fibonacci = (n: number) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return f(f)(n - 1) + f(f)(n - 2);
  };

  return fibonacci;
};

const fibonacci = f(f);
console.log(fibonacci(3));
