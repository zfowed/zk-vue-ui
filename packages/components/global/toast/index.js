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
      visible: false,
      message: '这是一条信息',
      duration: 3000,
      timer: null
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
    clearTimeout(this.timer)
    window.removeEventListener('click', this.handleClose)
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
