/* globals Watcher */
/* eslint-disable @typescript-eslint/no-unused-vars, class-methods-use-this */
class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  }

  // 使用 chileNodes(子节点) 而不是 children(子元素)
  compile(el) {
    Array.from(el.childNodes).forEach(node => {
      if (this.isTextNode(node)) {
        this.compileText(node);
      }
      if (this.isElementNode(node)) {
        this.compileElement(node);
      }

      if (node.childNodes?.length) this.compile(node);
    });
  }

  compileElement(node) {
    Array.from(node.attributes).forEach(attr => {
      if (this.isDirective(attr.name)) {
        const attrName = attr.name.slice(2);
        if (attrName.startsWith('on')) this.onUpdater(node, attr.value, attrName);
        else this.update(node, attr.value, attrName);
      }
    });
  }

  update(node, key, attrName) {
    const updateFn = this[`${attrName}Updater`];
    updateFn && updateFn.call(this, node, key);
  }

  textUpdater(node, key) {
    node.textContent = this.vm[key];
    new Watcher(this.vm, key, newValue => {
      node.textContent = newValue;
    });
  }

  modelUpdater(node, key) {
    node.value = this.vm[key];
    new Watcher(this.vm, key, newValue => {
      node.value = newValue;
    });

    node.addEventListener('input', e => {
      this.vm[key] = node.value;
    });
  }

  htmlUpdater(node, key) {
    node.outerHTML = this.vm[key];
    new Watcher(this.vm, key, newValue => {
      node.outerHTML = newValue;
    });
  }

  onUpdater(node, cb, attrKey) {
    // on:click
    const eventName = attrKey.slice(3);
    let fn;
    if (/^\w+$/.test(cb)) fn = this.vm[cb];
    else throw Error('只实现了简单方法名的v-on, 函数声明和方法调用表达式未实现');
    node.addEventListener(eventName, e => {
      fn.call(this.vm, e);
    });
  }

  compileText(node) {
    const reg = /\{\{(.+?)\}\}/;
    const { textContent } = node;
    if (reg.test(textContent)) {
      const key = RegExp.$1.trim();
      node.textContent = textContent.replace(reg, this.vm[key]);
      new Watcher(this.vm, key, newValue => {
        node.textContent = textContent.replace(reg, newValue);
      });
    }
  }

  isDirective(attrName) {
    return attrName.startsWith('v-');
  }

  isTextNode(node) {
    return node.nodeType === 3;
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }
}
