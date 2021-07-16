# nodejs

## 架构

- 内置核心模块 native modules
- 胶水层node c/c++ bindings
- 执行引擎, 事件循环, 网络库等模块 v8, libuv, ...
- 硬件

1. 默认情况下 this 是空对象, 不是 global

```javascript
console.info(this === global) // false

(function () {
  console.info(this === global) // true
})()
```

## process

### 资源

- process.memoryUsage()
- process.cpuUsage()

### 运行环境

- process.cwd()
- process.version
- process.versions
- process.arch
- process.env
  - process.env.PATH
  - process.env.USERPROFILE // win
  - process.env.HOME // mac
- process.platform

### 运行状态

- process.argv
- process.argv0
- process.execArgv
- process.pid
- process.ppid
- process.uptime()

### 事件

- process.on('exit', () => {})
- process.on('beforeExit', () => {})

### io

- process.stdin
- process.stdout
- process.stderr

## path

## Buffer

空间申请不由 node 完成, 不占用 v8 内存空间, 但由 v8 进行 gc

- Buffer.alloc() // 申请的内存空间经过清理
- Buffer.allocUnsafe() // 申请的内存空间可能存在脏数据
- Buffer.from() // 根据字符串/数组/Buffer对象生成 buffer

## commonjs

模块同步加载

### module 对象的属性

任意 js 文件就是一个模块, 可以直接使用 module 属性

- module.id
- module.filename
- module.loaded
- module.parent
- module.children
- module.exports
- module.paths

### require 对象的属性

- require.cache
- require.resolve // 返回目标模块路径
- require.extensions // 废弃
- require.main // 主模块对象

## 事件循环

### 浏览器

- 宏任务队列
- 微任务队列

### node

- timers: setTimeout, setInterval
- pending callbacks: 系统回调, 如 tcp, udp
- idle, prepare: 系统内部使用
- poll: io 回调
- check: setImmediate(宏任务) 回调
- close callbacks: close 事件回调

切换顺序: timer => pending callbacks => idle, prepare => poll => check => close

process.nextTick 优先级高于 promise

### node 与浏览器的区别

|        |  浏览器  |  node  |
|--------|---------|---------|
|任务队列 |   2个   |   6个   |
|微任务执行时机|宏任务队列清空后执行|事件队列切换时清空微任务|
|微任务优先级|--|process.nextTick 优先于 Promise|

## stream

- Readable
- Writeable
- Duplex
- Transform

可写流 write 方法返回缓冲器是否已满, 缓冲器空间可用后触发 drain 事件
