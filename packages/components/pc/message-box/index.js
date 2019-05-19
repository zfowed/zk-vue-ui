import Vue from 'vue'
import MessageBox from './src/message-box.vue'

MessageBox.install = function (Vue) {
  Vue.component(MessageBox.name, MessageBox)
}

let instances = []

const MessageBoxConstructor = Vue.extend({
  render (h) {
    return h(MessageBox, {
      props: this.$data,
      on: {
        'update:visible': this.updateVisible,
        'close': this.onClose,
        'confirm': this.onConfirm,
        'cancel': this.onCancel,
        'transitionend': this.handleTransitionend
      }
    })
  },
  data () {
    return {
      // 是否显示 Dialog，支持 .sync 修饰符
      visible: false,
      // Dialog 的标题，也可通过具名 slot
      title: '标题',
      // MessageBox 消息正文内容
      message: '消息正文内容',
      // 是否将 message 属性作为 HTML 片段处理
      dangerouslyUseHTMLString: false,
      // Dialog 的自定义类名
      customClass: undefined,
      // 是否显示 modal
      modal: true,
      // 是否可以通过点击 modal 关闭 Dialog
      closeOnClickModal: true,
      // 是否显示关闭按钮
      showClose: true,
      // 关闭前的回调，会暂停 Dialog 的关闭
      beforeClose: this.beforeClose,
      // 是否显示取消按钮
      showCancelButton: false,
      // 是否显示确定按钮
      showConfirmButton: true,
      // 居中
      center: true,
      // 取消按钮的文本内容
      cancelButtonText: '取消',
      // 确定按钮的文本内容
      confirmButtonText: '确定',
      // 取消按钮的自定义类名
      cancelButtonClass: undefined,
      // 确定按钮的自定义类名
      confirmButtonClass: undefined,
      // 回调
      callback: undefined
    }
  },
  methods: {
    handleTransitionend () {
      if (!this.visible) {
        this.destroyElement()
      }
    },
    destroyElement () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    updateVisible (visible) {
      this.visible = visible
    },
    onClose () {
      this.callback && this.callback('close', this)
    },
    onConfirm () {
      this.callback && this.callback('confirm', this)
    },
    onCancel () {
      this.callback && this.callback('cancel', this)
    }
  },
  mounted () {
    this.visible = true
  }
})

function msgbox (options) {
  const p = (resolve, reject) => {
    if (typeof options === 'string') options = { message: options }
    let instance = new MessageBoxConstructor({
      data: Object.assign({}, options, {
        callback (action, instance) {
          options.callback && options.callback(action, instance)
          const index = instances.indexOf(instance)
          instances.splice(index, 1)
          if (action === 'confirm') return resolve && resolve()
          return reject && reject(action)
        }
      })
    })
    instance.$mount()
    instances.push(instance)
    document.body.appendChild(instance.$el)
  }
  return options.callback ? p() : new Promise(p)
}

msgbox.alert = function (message, title, options) {
  if (typeof title !== 'string') {
    options = title
    title = undefined
  }
  return msgbox(Object.assign({
    title,
    message,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: '确定',
    closeOnClickModal: false
  }, options || {}))
}

msgbox.confirm = function (message, title, options) {
  if (typeof title !== 'string') {
    options = title
    title = undefined
  }
  return msgbox(Object.assign({
    title,
    message,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    closeOnClickModal: true
  }, options || {}))
}

msgbox.prompt = function () {}

msgbox.close = function () {
  for (const instance of [...instances]) {
    instance.visible = false
  }
}

MessageBox.msgbox = msgbox
export { MessageBox, msgbox }
export default MessageBox
