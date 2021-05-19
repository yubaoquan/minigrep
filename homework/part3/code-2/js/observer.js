/* eslint-disable @typescript-eslint/no-unused-vars */
/* globals Dep */
class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data) {
    if (!data || typeof data !== 'object') return;
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(obj, key, value) {
    this.walk(value);
    const dep = new Dep();
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set: newValue => {
        if (newValue === value) return;

        value = newValue;
        this.walk(newValue);
        dep.notify();
      },
    });
  }
}
