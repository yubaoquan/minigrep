# 模块作业

## 简答题

### 1

当我们点击按钮的时候动态给 data 增加的成员是否是响应式数据，如果不是的话，如何把新增成员设置成响应式数据，它的内部原理是什么。

- vue2.x 中, name 不是响应式的, 因为 Vue 使用 Object.defineProperty 对 data 的属性进行劫持, 而给 dog 添加 name 的过程, 不会触发 dog 的 setter, 所以 dog.name 不是响应式的;
- vue3 中, name 是响应式的. vue3 使用 Proxy 对整个 data 对象进行劫持, 所以给dog.name 赋值时会触发 proxy 的 set, 对 dog.name 进行响应式处理;

### 2. 请简述 Diff 算法的执行过程

1. 新旧节点的 key 和 sel 不同, 认为两个节点不同(sameVnode 函数的逻辑), 否则继续
2. 新节点是否有 text. 如果有且和旧节点不同, 则更新旧节点的 text (patchVnode)
3. 如果新节点有 children, 判断新旧节点的 children
4. children 维持四个下标分别指向新旧children的开始和结束位置
5. 比较分5种情况: `旧开始-新开始`, `旧开始-新结束`, `旧结束-新开始`, `旧结束-新结束`, `其他情况`

- `旧开始-新开始`: 如果 sameVnode 返回 true, 直接调用 patchVnode, 移动两个下标继续往后移动进行比较; 否则进入`旧结束-新结束`
- `旧结束-新结束`: 如果 sameVnode 返回 true, 直接调用 patchVnode, 移动两个下标继续往前移动进行比较;
- `旧结束-新开始`: 旧的结束下标指向的节点和新的开始下标指向的节点进行比较, 如果 sameVnode 返回 true, 调用 patchVnode, 然后把旧结束节点移动到开始位置, 更新下标, 旧结束--, 新开始++
- `旧开始-新结束`: 旧开始下标指向的节点与新结束下标指向的节点进行比较, 如果 sameVnode 返回 true, 调用 patchVnode, 把旧开始节点移动到队列末尾, 更新下标, 旧开始++, 新结束--
- `其他情况`: 新 children 从头开始遍历, 在旧节点列表中查找相同节点 (即调用 sameVnode 返回 true 的节点), 如果找到, 调用patchVnode更新旧节点的内容, 并将此节点移动到节点列表最前面, 否则将新节点插入旧节点列表的开始位置

## 编程题

1. 进入 code-1/test-router 目录, 安装依赖, 执行 `yarn serve` 即可, router 实现在 my-router 目录
2. 用浏览器打开 code-2/index.html 即可查看
3. building...
