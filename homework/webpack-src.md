# webpack 源码分析

## 打包后的文件

文件中是一个函数的自调用, 入参modules是对象, key是模块路径, value是一个被函数包裹的模块内容

### installedModules

缓存已加载的模块

### __webpack_require__(moduleId)

- 根据 moduleId 返回模块的 exports
- 首次执行时传入入口文件的 moduleId
- c installedModules
- d 给 exports 添加属性 defineProperty
- e 向页面添加 script 标签, 请求模块, 返回 promise
- m modules
- n 处理默认导出
- o 判断对象是否有某个属性 hasOwnProperty
- p publicPath
- r 标记当前模块为ES Module的模块, 给 es 模块添加toStrong , and define __esModule on exports
- s 主入口文件路径
- t 加载模块, 做处理, 返回模块

### module 对象

- i 文件路径
- l 是否已加载
- exports 模块导出的内容

## 使用ES Module 方式导出语法的模块

1. 模块标记为esm模块(调用__webpack_require__.r方法)
2. 属性名导出(调用__webpack_require__.d方法): 给模块定义一个带有getter的属性, getter返回属性值
3. 默认导出: 给模块添加default属性, 属性值就是默认导出的东西

## 使用commonjs 方式导出语法的模块

没有额外处理, 直接 module.exports = xxx

## 使用ES Module 方式导入语法的模块

1. 标记为esm模块
2. 包装并标记默认导出的值

## 动态加载

## tapable

webpack 内部依赖的一个库

### hooks

#### 分类

同步/异步

- Hook 普通钩子, 互相独立
- BailHook 熔断钩子, 某个监听返回非 undefined 时后续不执行
- WaterfallHook 瀑布钩子, 上一个监听返回值传给下一个监听
- LoopHook 循环钩子, 执行完当前函数后, 若当前函数返回非 undefined, 直接进入下一轮循环, 否则执行下一个函数

#### 用法

同步

tap: 添加钩子
call: 触发事件

异步

tapAsync/callAsync, 需要提供钩子回调
tapPromise/promise 钩子中返回 Promise
