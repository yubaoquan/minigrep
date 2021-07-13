# 作业

## 简答题

### 通过该项目，请简要说明 typescript 比 javascript 的优势在哪？

1. 开发阶段即可将一些产生类型错误或空值错误的语句提示出来;
2. 项目代码更可维护, 数据类型有清晰的定义来描述;
3. 编码更方便, 编辑器可以根据变量的类型联想出数据对象的属性;

### 请简述一下支付流程

1. 调用后端接口, 传递的参数包含支付宝要求的数据(总金额, 订单标题, 订单描述)和后端要求的数据(商品数组, 收货地址, 用户ID)
2. 跳转到后端接口返回的支付页面地址进行支付
3. 支付完成后, 支付宝的页面跳转回支付成功页面, 将支付成功信息(订单信息等)展示给用户

### react-redux 的主要作用是什么，常用的 api 有哪些，什么作用？

将 react 和 redux 结合的库, 使 react 组件更方便的获取 redux 中的数据, 更方便的 dispatch action

常用 API:

- useSelector 传入 selector 函数, 从 store 中获取数据供函数式组件使用
- useDispatch 用于在函数式组件中 获取dispatch函数, 触发 action
- connect 将 redux 中的 state 和 dispatch 混入类组件的 props 中
- mapStateToProps 将 store 中的 state 数据映射到类组件的 props 中
- mapDispatchToProps 将 dispatch action 封装成一个单独的函数传入类组件的 props 中

### redux 中的异步如何处理？

结合异步中间件 react-saga 处理.

- 一个异步请求包括请求前, 请求成功, 请求失败三种状态.
- 定义并导出异步操作的 action(包括类型, payload), 和 action 的生成器函数
- 定义异步操作对应的 reducer, 定义初始的 state, 在 reducer 中根据 action 状态对 state 做不同的操作并返回新的 state
- 调用 combineReducers 将所有的 reducer 统一导出
- 定义 saga 文件, 在 saga 中定义获取数据所需的异步操作. 调用 takeEvery 将 action 与异步操作对应起来
- 将所有的 saga 通过中间件 api 传递给 store
- sagaMiddleware.run
- 函数式组件中触发异步操作是调用 useDispatch, 获取状态值时使用 useSelect
