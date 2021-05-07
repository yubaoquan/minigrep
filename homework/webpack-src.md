# webpack 源码分析

## 打包后的文件

文件中是一个函数的自调用, 入参modules是对象, key是模块路径, value是一个被函数包裹的模块内容

### installedModules

缓存已加载的模块

### __webpack_require__(moduleId)

- 根据 moduleId 返回模块的 exports
- 首次执行时传入入口文件的 moduleId
- m modules
- c installedModules
- d 给 exports 添加属性 defineProperty
- n 处理默认导出
- o 判断对象是否有某个属性 hasOwnProperty
- p publicPath
- s 主入口文件路径
- r 处理模块, 给 es 模块添加toStrong , and define __esModule on exports
- t 加载模块, 做处理, 返回模块

### module 对象

- i 文件路径
- l 是否已加载
- exports 模块导出的内容
