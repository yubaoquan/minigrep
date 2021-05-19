/* eslint-disable @typescript-eslint/no-unused-vars */
class Dep {
  subs = [];

  static target = null;

  static addTarget(watcher) {
    Dep.target = watcher;
  }

  static clearTarget() {
    Dep.target = null;
  }

  addSub(sub) {
    if (!sub || !sub.update) return;
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update();
    });
  }
}
