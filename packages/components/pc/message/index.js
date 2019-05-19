import Vue from 'vue'
import Message from './src/message.vue'

Message.install = function (Vue) {
  Vue.component(Message.name, Message)
}

let instances = []

const MessageConstructor = Vue.extend({
  render (h) {
    return h(Message, {
      props: Object.assign({}, this.$data, {
        appendToBody: false
      }),
      on: {
        transitionend: this.handleTransitionend
      }
    })
  },
  data () {
    return {
      // 是否显示 Message，支持 .sync 修饰符
      visible: false,
      // 消息正文内容
      message: '消息正文内容',
      // 主题 success/warning/error
      type: 'success',
      // 是否将 message 属性作为 HTML 片段处理
      dangerouslyUseHTMLString: false,
      // Message 的自定义类名
      customClass: undefined,
      // Message 的自定义类名
      duration: 3000,
      // 关闭时的回调函数, 参数为被关闭的 message 实例
      onClose: null
    }
  },
  methods: {
    handleTransitionend () {
      if (!this.visible) {
        this.destroyElement()
      }
    },
    handleClose () {
      this.visible = false
    },
    destroyElement () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  mounted () {
    this.visible = true
    if (this.duration > 0) {
      this.timer = setTimeout(this.handleClose, this.duration)
    }
    setTimeout(() => window.addEventListener('click', this.handleClose, false), 0)
  },
  destroyed () {
    this.onClose && this.onClose(this)
    clearTimeout(this.timer)
    window.removeEventListener('click', this.handleClose)
  }
})

function message (options) {
  if (typeof options === 'string') options = { message: options }
  let instance = new MessageConstructor({
    data: Object.assign({}, options, {
      onClose (instance) {
        options.onClose && options.onClose(instance)
        const index = instances.indexOf(instance)
        instances.splice(index, 1)
      }
    })
  })
  instance.$mount()
  instances.push(instance)
  document.body.appendChild(instance.$el)
}

message.success = function (options) {
  if (typeof options === 'string') options = { message: options }
  return message(Object.assign({}, options || {}, {
    type: 'success'
  }))
}

message.warning = function (options) {
  if (typeof options === 'string') options = { message: options }
  return message(Object.assign({}, options || {}, {
    type: 'warning'
  }))
}

message.error = function (options) {
  if (typeof options === 'string') options = { message: options }
  return message(Object.assign({}, options || {}, {
    type: 'error'
  }))
}

message.close = function () {
  for (const instance of [...instances]) {
    instance.visible = false
  }
}

Message.message = message
export { Message, message }
export default Message
