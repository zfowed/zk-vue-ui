
class Queue {
  constructor (worker, concurrency) {
    this.tasks = []
    this.worker = typeof worker === 'function' ? worker : null
    this.concurrencyMax = typeof concurrency === 'number' && concurrency > 0 ? concurrency : 1
    this.concurrencyCut = 0
    this.drain = null
  }
  _start () {
    if (this.tasks.length === 0 || this.concurrencyCut >= this.concurrencyMax) {
      return
    }
    var taskData = this.tasks.shift()
    this.concurrencyCut += 1
    this.worker && this.worker(taskData.task, this._next.bind({ taskData: taskData, self: this }))
  }
  _next () {
    var self = this.self
    var taskData = this.taskData
    taskData.callback && taskData.callback.apply(this, arguments)
    self.concurrencyCut -= 1
    if (self.tasks.length > 0) { return self._start() }
    if (self.concurrencyCut === 0) { return self.drain && self.drain() }
  }
  push (task, callback) {
    this.tasks.push({ task: task, callback: callback })
    if (this.concurrencyCut < this.concurrencyMax) { return this._start() }
  };
}

export default Queue
