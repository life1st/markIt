1. mark

如果 :name 存在，则 push 一个时间戳在后面
不存在则新增一项并 push 当前时间

```
  url: '/markit/:name',
  method: post,
```

2. delete

删除名为 :name 的列表

```
  url: '/markit/:name'
```

3. get

获取名为 :name 的列表

```
  url: '/markit/:name',
  method: get
```

获取所有列表

```
  url: '/markit'
  method: get
```

4. connect db

连数据库（为了不保存密码

```
  url: '/db/connect/:pwd'
  method: post
```