import Vue from 'vue'
import Toast from './src/toast.vue'

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
}

const ToastConstructor = Vue.extend({
  render (h) {
    return h(Toast, {
      props: {
        visible: this.visible,
        message: this.message
      },
      on: {
        transitionend: this.handleTransitionend
      }
    })
  },
  data () {
    return {
      title: '提示',
      message: '这是一条信息',
      visible: false,
      duration: 3000,
      timer: null,
      closed: false
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  methods: {
    handleTransitionend () {
      if (this.closed) {
        this.destroyElement()
      }
    },
    destroyElement () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true
    }
  },
  mounted () {
    this.visible = true
    if (this.duration > 0) {
      this.timer = setTimeout(this.close, this.duration)
    }
  }
})

function toast (options) {
  if (typeof options === 'string') {
    options = { message: options }
  }
  let instance = new ToastConstructor({ data: options })
  instance.$mount()
  document.body.appendChild(instance.$el)
}

Toast.toast = toast
export { Toast, toast }
export default Toast
