/* eslint-disable no-underscore-dangle */
/* globals document, Observer, Compiler */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Vue {
  constructor(options) {
    this.$options = options || {};

    // this.$data = options.data || {};
    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;

    const data = typeof options.data === 'object' ? options.data : options.data.call(null);
    this.$data = data;
    this.$methods = options.methods || {};
    this._proxyData(this.$data);
    this._proxyMethods(this.$methods);
    new Observer(this.$data);
    new Compiler(this);
  }

  /** 把 vue 实例上对于数据的属性读写映射到 data 上 */
  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) return;
          data[key] = newValue;
        },
      });
    });
  }

  _proxyMethods(methods) {
    Object.keys(methods).forEach(methodName => {
      if (Object.prototype.hasOwnProperty.call(this, methodName)) {
        throw Error(`${methodName}已经定义过了`);
      }
      const method = methods[methodName].bind(this);
      Object.defineProperty(this, methodName, {
        enumerable: true,
        configurable: true,
        get() {
          return method;
        },
        set() {
          return false;
        },
      });
    });
  }
}
