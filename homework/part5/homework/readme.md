# 5-1 作业

## 简答题

### 简述 Node.js 的特点以及适用的场景

特点:

- 跨平台的异步非阻塞 io 提高应用性能
- 事件驱动的编程模式, 简化异步编程
- 单线程(主线程), + libuv 实现了传统多线程的并发功能同时减少多个进程/线程的切换开销
- 在执行计算密集型的任务时性能较差

使用场景:

- io 密集型的高并发 web 服务器(bff层, api服务)
- 聊天程序
- 前端工程构建
- 桌面应用

### 简述 Buffer 的使用.包括多种创建方式。实例方法，静态方法

创建

构造函数(废弃):

- new Buffer()

静态方法:

- Buffer.alloc()
- Buffer.from()
- Buffer.concat()

实例方法:

- buffer.slice()

使用

一般用于 io 操作的缓冲区, 如从流读取数据放入 buffer 中或从 buffer 中读取数据写入其他流/文件中

```javascript
const fs = require('fs')

const ws = fs.createWriteStream('./test.txt')
ws.write(Buffer.from('hello world'))
ws.close
```

### 写出5个以上文件操作的API，并且用文字说明其功能

- fs.readFile 读取文件内容
- fs.writeFile 向文件写入内容
- fs.open 打开文件
- fs.access 判断用户是否具有指定文件/目录的权限
- fs.existsSync 判断文件是否存在
- fs.chmod 修改文件/目录权限
- fs.close 关闭文件

### 简述使用流操作的优势，以及Node中流的分类

- 读写大量数据时不必一次性把全部数据载入内存中节省内存开销
- 可以分段处理多个数据, 效率高
- 可以对数据进行加工简化程序扩展

分类

- 可读流 Readable Stream
- 可写流 Writable Stream
- 双工流 Duplex Stream
- 转换流 Transform Stream

### 在数据封装与解封装过程中，针对应用层、传输层、网络层、数据链路层、物理层5层分别做了什么事情？

- 应用层: 用户与网络的接口
- 传输层: 控制数据传输可靠性
- 网络层: 确定目标网络
- 数据链路层: 确定目标主机
- 物理层: 各种物理设备的标准

## 代码题

### 统计指定目录中文件总大小。要考虑目录中还有子目录的情况。可以同步编码,异步更好。

文件: `./file-sum.js`

用法:

```bash
# 打印扫描细节(每个目录/文件大小)
node file-sum <dir> i

# 不打印细节
node file-sum <dir>
```

### 编写单向链表类并且实现队列的入列出列操作

目录: `./linked-list`

### 基于Node写出一静态服务器。接收请求并且响应特定目录(服务器目录)中的html、css、js、图片等资源
