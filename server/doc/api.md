1. mark

如果 :name 存在，则 push 一个时间戳在后面
不存在则新增一项并 push 当前时间

```
  url: '/markit/:name',
  method: post,
```

2. delete

删除名为 :name 的项目

```
  url: '/markit/:name'
```