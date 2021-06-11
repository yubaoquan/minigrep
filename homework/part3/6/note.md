# 查缺补漏

## git

记忆本次推送的 origin

```bash
git push -u origin master
```

下次push的时候, 只需要 `git push`

## vue

### v-slot

`slot` 和 `slot-scope` 已废弃, 使用 `v-slot`

### v-model

组件上加v-model, 实质是组件接收一个叫做 value 的 prop, 子组件内想更改值时发送 input 事件

index.vue

```vue
<template>
  <foo v-model="src" />
</template>

<script>
export default {
  data() {
    return {
      src: 'xxx'
    }
  }
}
</script>
```

foo.vue

```vue
<template>
  <div>
    <img :src="src">
    <button @click="handleChangeClick">change</button>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleChangeClick() {
      const newSrc = 'yyy'
      this.$emit('input', newSrc)
    }
  }
}
</script>

```

### 路由解耦

- 组件中声明与路由参数同名的propps
- 在路由配置中对应路由配置添加 props: true

### 基于路由权限校验

```javascript
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```

## 工程化

### 自定义打包输出文件名称

在路由配置中添加注释 webpackChunkName, 例如:

```javascript
component: () => import(/* webpackChunkName: 'xxx' */ '@/views/xxx.vue'),
```

## element-ui

### 布局组件

element 提供的布局组件, 看一下

### el-menu 点击事件

不一定需要注册 command, 也可以在 menu 项上直接加 `@click.native`

### 清空表单

element form 提供了 clear 方法, 需要给每个表单项添加 props 对应字段名

### 弹窗

el-dialog 写到图组件中, 将中间的 slot 抽取到单独的组件, 用 `v-if="visible"` 确保每次打开弹窗清空内容

### el-switch

可以设置开关的值

- active-value
- inactive-value

### el-progress

没必要自己实现进度条

## scoped style

单文件组件中的 scoped 样式默认能作用到**子组件的根元素**, 再往里需要加`::v-deep`

## axios

### 进度

axios 提供了进度更新时的钩子函数

- onUploadProgress 上传进度
- onDownloadProgress 下载进度
