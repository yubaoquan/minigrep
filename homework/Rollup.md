# Rollup

- esm 打包器
- 不支持HMR
- 自动 tree shaking

## 配置文件

- rollup.config.js
- 可以使用esm语法. rollup会对其进行处理
- 默认情况下rollup不会读取配置文件, 必须在命令行中指明配置文件
- 只支持添加plugin的方式进行功能扩展

### 多入口打包

- input 传数组或对象
- format 不能使用 iife

## 模块导入

### 无后缀导入语法

需要 rollup-plugin-node-resolve 插件支持不带后缀的导入

### 导入commonjs 模块

需要 rollup-plugin-commonjs
