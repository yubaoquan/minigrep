/* eslint-disable no-underscore-dangle */
let _Vue = null;

export default class MyRouter {
  static install(Vue) {
    if (MyRouter.install.installed) return;
    MyRouter.install.installed = true;
    _Vue = Vue;

    _Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
          this.$options.router.init();
        }
      },
    });
  }

  routeMap = {};

  constructor(options) {
    this.options = options;
    this.data = _Vue.observable({ current: window.location.hash.slice(1) || '/' });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  initEvent() {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.hash.slice(1);
    });
  }

  createRouteMap() {
    this.options.routes.forEach(({ path, component }) => {
      this.routeMap[path] = component;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  initComponents(Vue) {
    Vue.component('router-link', {
      props: {
        to: String,
      },
      render(h) {
        const { origin, pathname } = window.location;
        return h('a', {
          attrs: { href: `${origin}${pathname}#${this.to}` },
          on: {
            click: this.clickHandler,
          },
        }, [this.$slots.default]);
      },
      methods: {
        // eslint-disable-next-line
        clickHandler(e) {
          this.$router.data.current = this.to;
        },
      },
    });

    const router = this;
    Vue.component('router-view', {
      render(h) {
        return h(router.routeMap[router.data.current]);
      },
    });
  }
}
