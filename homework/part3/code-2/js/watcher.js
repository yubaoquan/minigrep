/* globals Dep */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;
    Dep.addTarget(this);

    this.oldValue = vm[key];
    Dep.clearTarget();
  }

  update() {
    const newValue = this.vm[this.key];
    if (newValue === this.oldValue) return;
    this.cb(newValue, this.oldValue);
  }
}
