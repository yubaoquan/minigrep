# 简答

## 1. 请简述 React 16 版本中初始渲染的流程

分成两个阶段: render 阶段和 commit 阶段

### render

- 为每一个 React 元素构建 Fiber 对象
- 为子 Fiber 对象创建对应的 DOM 对象
- 为 Fiber 对象添加 effectType 属性, 代表需要执行哪种 DOM 操作

### commit

- 获取 render 阶段生成的结果, 即 workInProgressFiberTree
- 遍历 workInProgressFiberTree, 根据每个 Fiber 节点的 effectType 中的值执行对应的 DOM 操作

## 2. 为什么 React 16 版本中 render 阶段放弃了使用递归

递归无法终止, 如果fiber树比较大的话,会消耗大量的渲染时间, 造成页面卡顿

## 3. 请简述 React 16 版本中 commit 阶段的三个子阶段分别做了什么事情

### before mutation

1. 在 commitBeforeMutationEffects 中 while 循环遍历 nextEffect, 处理所有需要执行 DOM 操作的 fiber 对象
2. 调用 commitBeforemutationEffectOnFiber 执行类组件有关的快照逻辑, 其中会获取组件实例的旧的 props, state 用来生成快照
3. 调用组件的 getSnapshotBeforeUpdate 生命周期函数, 生成类组件的快照
4. 给实例属性添加 __reactInternalSnapshotBeforeUpdate 属性, 指向其快照, 此快照将在在 componentDidUpdate 生命周期函数中使用

### mutation

根据 effectType 执行 DOM 操作

1. commitMutationEffects 同样通过 while 循环处理需要执行 DOM 操作的所有 effect
2. while 中获取 fiber 对象的 effectTag, 判断需要执行哪种 DOM 操作. 如插入dom/插入并更新dom/删除dom
3. 执行匹配到的 DOM 操作并重置 effectTag 的值为1, 表示已执行完 DOM 操作
4. 查找非 React 组件的父级, 并根据父级节点的类型获取真实 DOM 节点对象
5. 将子元素插入到获取到的容器中. 这个过程中会判断容器是不是注释节点, 如果是, 找到容器的父节点, 将要插入的节点插入到注释节点的前面. 如果容器不是注释节点, 需要判断待插入的子节点是否有兄弟节点. 如果有, 将子节点插入兄弟节点前, 否则直接插入容器中.

### layout

DOM 操作已经完成, 调用类组件的生命周期方法或函数组件的钩子

1. commitLayoutEffects 函数中用 while 循环处理所有类/函数组件的生命周期钩子
2. 循环中会调用 commitLayoutEffectOnFiber, 在其中使用 switch 匹配 fiber 节点的类型

#### 类组件

3. 获取类组件的实例对象, 判断对象中是否有调用生命周期钩子, 判断是否为初次渲染, 执行不同的逻辑. 如果是初次渲染, 调用componentDidMount, 否则调用 componentDidUpdate, 传入组件旧的 props, state 和快照
4. 遍历任务队列(commitUpdateQueue), 调用 render 方法的第三个参数, 即渲染完成的回调函数

#### 函数组件

3. 如果 fiber 的节点类型是函数组件, 调用 commitHookEffectListMount
4. 获取 updateQueue?.lastEffect?.next 赋值给 firstEffect
5. 将 firstEffect 赋值给 effect, 进入 do-while 循环
5. 循环中调用 effect.create 获得销毁函数
6. effect = effect.next 继续下一轮循环

## 4. 请简述 workInProgress Fiber 树存在的意义是什么

实现双缓存. 在内存中渲染好下一帧的树, 将 currentFiberTree 和内存中的 workInProgressTree 进行替换, 实现快速更新dom树, 以提高渲染效率
