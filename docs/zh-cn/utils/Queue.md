## Queue 队列

创建一个任务队列

### 基本用法

```javascript
/** 创建一个并发为10的一个任务队列 */
var queue = new Queue(function (task, next) {
  // task: 当前任务
  // next: 当前任务处理完了，执行next(arguments);进行回调
  console.log('正在处理' + task.name + '任务')
  return next()
}, 10)

// 队列为空的时候调用的function
queue.drain = function() {
  console.log('所有任务都执行完了')
}

// 将一些任务添加到队列中
queue.push({name: 'foo'}, function() {
  console.log('foo任务完成了')
})

queue.push({name: 'bar'}, function () {
  console.log('bar任务完成了')
})
```