# webpack

## output

output.path 必须是绝对路径

## optimization

### tree shaking 与 sideEffects

- 旧版本(2) webpack 中 babel-loader 会导致 tree shaking 失效

### 标记副作用

- 在webpack.optimization 中开启副作用
- 在package.json中 添加 sideEffects属性(Array或Boolean)

### splitChunks

`chunks: all` 提取所有公共模块打包到一个文件里

### hash

- hash 工程级别
- chunkhash 打包链路级别
- contenthash 文件内容级别

## 分包

- 多入口打包
- 动态导入(被动态导入的模块会自动打包到单独的js文件)

### 魔法注释

```javascript
import(/* webpackChunkName: 'xxx' */'./aaa/bbb.js').then(({ default: m }) => {})
```

- 可以指定分包的文件名
- 相公的chunkName会被打包到相同文件

### entry 属性

- 字符串/数组: 打包到一起
- 对象: 打包出多个文件

### MiniCssExtratPlugin

- 去掉 style-loader, 改成 MiniCssExtractPlugin.loader
- OptimizeCssAssetsWebpackPlugin 对css进行压缩(配置到optimization.minimizer数组中, 可以在开启代码优化的情况下启动. 此时webpack 视作用户修改了压缩逻辑, 将不自动压缩js.所以需要将压缩js的插件TerserWebpackPlugin手动加入此minimizer)

## HTMLWebpackPlugin

- 不配置情况下, 生产的html会自动注入所有bundle.
- 添加chunks参数, 指定注入到html中的bundle
