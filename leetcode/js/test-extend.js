/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class A {
  constructor(param) {
    console.info('this is A constructor ', param);
  }
}

class B extends A {
  foo() {
    console.info('this is foo instance');
  }
}

const b = new B(11);

b.foo();
