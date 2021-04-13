# preload

[css 阻塞渲染与preload 原文](https://vuejsdevelopers.com/2017/07/24/critical-css-webpack)
[css 阻塞渲染与preload 翻译](https://segmentfault.com/a/1190000011503284)

## 什么是阻塞渲染

如果资源是“阻塞渲染”的，则表示浏览器在资源下载或处理完成之前不会显示该页面。

通常，我们在html的head标签中添加CSS样式表，这种方式会阻塞渲染，如下所示：

```html
<head>
  <link rel="stylesheet" href="/style.css">
  ...
</head>
<body>
  <p>在style.css下载完之前，你看不到我！！！</p>
</body>
```

当这个html页面被网络浏览器加载时，它将从上到下被逐行解析。当浏览器解析到link标签时，它将立即开始下载CSS样式表，在完成之前不会渲染页面。

对于一个大型网站，尤其是像使用了Bootstrap这种庞大框架的网站，样式表有几百KB，用户必须耐心等待其完全下载完才能看到页面。

那么，我们是否应该把link标签放到body中，以防止阻塞渲染？你可以这么做，但是阻塞渲染也不是全无优点，我们实际上可以利用它。如果页面渲染时没有加载任何CSS，我们会遇到丑陋的"内容闪现"。

我们想要的完美解决方案就应该是：首屏相关的关键CSS使用阻塞渲染的方式加载，所有的非关键CSS在首屏渲染完成后加载。
