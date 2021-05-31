# Vue.js 源码剖析-响应式原理、虚拟 DOM、模板编译和组件化

## 简答题

### 1、请简述 Vue 首次渲染的过程

- 初始化实例成员/静态成员
- 调用构造函数 new Vue()
- 构造函数中调用 this._init()
- _init 中调用 vm.$mount()  // (有compiler)
- 检查是否有 render 函数, 如果没有, 查找 template 选项, 如果没有 template, 通过 el 选项获取模板, compileToFunctions 将模板编译成 render 函数, 保存到 options.render 中
- 调用 vm.$mount() 获取 el (无compiler)
- 调用 mountComponent 判断是否有 render 选项, 如果没有 render 但传入了模板且是开发环境, 发出不支持编译器的警告
- 触发 beforeMount
- 定义 updateComponent, 内部调用 vm._update(vm._render())
- _render 内部调用用户传入的 render 或编译生成的 render, 生成虚拟dom返回
- _update 内部调用 vm.__patch__ 根据虚拟 dom 生成真实 dom, 赋值到 vm.$el
- 创建 Watcher 对象, 传入 updateComponent, 在其中 get 方法调用 updateComponent
- 触发 mounted
- 返回 vm

### 2、请简述 Vue 响应式原理

- Vue 构造函数的 _init 中调用 _initState, 调用 _initData 将 data 中的属性挂载到 vue 实例上
- 调用 observe 对 data 进行处理
- 为 data 上的属性创建 Observer 对象
- 判断 value 是否可以做响应式处理, 如果可以, 创建 Observer 对象
- 如果 value 是根对象, 计数器+1
- Observer 类的构造函数中调用 def 函数为 value 设置 __ob__ 记录 observer 对象, 不可枚举
- 递归遍历 value, 调用 defineReactive
- defineReactive 中将属性转换成 getter/setter, 并创建 Dep 对象用于收集依赖
- get 中判断如果有 Dep.target, 调用 dep.depend() 将 dep 对象添加到 watcher 对象的 newDeps 数组中, 并向 dep 对象的 subs 数组中添加 watcher 对象
- 如果有子对象的 observer, 调用子对象的 dep.depend(), 给子对象收集依赖
- set 中获取旧值, 判断新旧值知否相等, 调用 setter, 如果新值是对象或数组, 继续 observe 新值, 将新值转换成响应式的
- mountComponent 中创建 Watcher 对象, Watcher 对象 的 get 中执行 pushTarget, 给 Dep.target 赋值成当前 watcher 对象, 用于 dep 在 get 方法中收集依赖.
- Watcher 的构造函数末尾调用 get 方法触发依赖收集
- 对于数组类型的属性, 重写数组的原型方法(会修改数组内容的方法), 在这些方法中触发数组的 observer 的 dep.notify() 通知 watcher 更新视图
- watcher 调用 update 方法, 调用 queueWatcher
- queueWatcher 中判断 watcher 是否被处理, 如果没处理, 添加到queue中, 调用 flushSchedulerQueue()
- flushSchedulerQueue 中触发 beforeUpdate, 调用watcher.run(), 清空上次依赖, 重置watcher 状态, 触发actived, updated 钩子
- 在数组方法中如果有新增的元素, 把新增的元素转换成响应式对象

### 3、请简述虚拟 DOM 中 Key 的作用和好处

在v-for循环中判断 dom 是否可重用. 如果可重用, 则不创建新的vnode. 在列表中有改变时不必更列表中没发生变化的dom. 减少不必要的dom操作, 节省性能

### 4、请简述 Vue 中模板编译的过程

- compileToFunctions 从缓存加载 render 函数, 如果没找到, 调用 compile 编译生成 render
- compile 中合并选项, 调用 baseCompile 编译模板
- baseCompile 中解析模板字符串, 获得 ast
- 优化 ast, 标记静态根节点
- 将 ast 对象转换成代码字符串
- compileToFunctions 将字符串转换成函数
- 调用 createFunction 创建 render 和 staticRenderFns, 挂载到 vue实例的options上
