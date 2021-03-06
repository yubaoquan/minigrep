# Vue

## 数据响应式

- 数据: 数据模型
- 响应式: 改变数据时, 视图会自动更新

## 双向绑定

- 数据变化 => 视图变化
- 视图变化 => 数据变化

## 数据驱动

- 只需要关注数据本身, 不需要关心数据如何渲染到视图

## 响应式核心原理

### 2.x

- 数据劫持  Object.defineProperty (无法shim, IE8下不兼容)
- 监听的是对象的属性, 所以需要遍历对象的 keys

#### 流程

- compiler 编译模板(处理指令)的过程中在 updater 中创建 Watcher, 并向其传递数据变化时的回调
- observer 劫持数据并在 get 中创建 dep, set 中触发 dep.notify
- watcher 在构造函数里触发 observer 中的 getter, 将自身添加到 dep.subs中

### 3.x

- Proxy (IE不支持)
- 监听的是对象, 所以不需要遍历 keys

## 发布/订阅模式

有事件中心

## 观察者

没有事件中心

## 以前不知道

- 添加根级的数据才需要使用 `$set`, 其他直接用赋值即可
- `RegExp.$1` 可以获取到之前 `someReg.test(someString)` 中的分组内容
