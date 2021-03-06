// 接收的参数 value disabled
// 可处理的参数 currentValue currentDisabled
// 需要处理的方法 handleFormFocus handleFormBlur
// 可使用的方法

import emitter from '../../emitter'

export default {
  mixins: [emitter],
  inject: {
    zkForm: {
      default: undefined
    },
    zkFormItem: {
      default: undefined
    }
  },
  props: {
    value: {},
    disabled: Boolean,
    disabledFormValidate: Boolean
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    currentDisabled () {
      return this.disabled || (this.zkForm || {}).disabled
    }
  },
  watch: {
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValue)
      if (this.disabledFormValidate) return
      return this.dispatch('ZkFormItem', 'zk.form.change', [this.currentValue])
    }
  },
  methods: {
    handleFormFocus (event) {
      if (this.disabledFormValidate) return
      this.dispatch('ZkFormItem', 'zk.form.focus', [this.currentValue])
    },
    handleFormBlur (event) {
      if (this.disabledFormValidate) return
      this.dispatch('ZkFormItem', 'zk.form.blur', [this.currentValue])
    }
  }
}
