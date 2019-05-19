
// 接收的参数 value placeholder disabled
// 可处理的参数 currentValue currentDisabled options option label
// 需要处理的方法
// 可使用的方法

import emitter from '../../emitter'

export default {
  componentName: 'ZkSelect',
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
    value: {
      type: [String, Number, Object]
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      zkSelect: this
    }
  },
  data () {
    return {
      currentValue: this.value,
      visible: false,
      optionInstance: []
    }
  },
  computed: {
    currentDisabled () {
      return this.disabled || (this.zkForm || {}).disabled
    },
    options () {
      return this.optionInstance.map(instance => {
        return {
          value: instance.value,
          label: instance.currentLabel,
          disabled: instance.disabled
        }
      })
    },
    option () {
      return this.options.find(option => option.value === this.currentValue)
    },
    label () {
      if (!this.option) return ''
      return this.option.label
    }
  },
  watch: {
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValue)
      return this.dispatch('ZkFormItem', 'zk.form.change', [this.currentValue])
    }
  },
  methods: {
    onAddOptionInstance (instance) {
      this.optionInstance.push(instance)
    },
    onRemoveOptionInstance (instance) {
      const index = this.optionInstance.indexOf(instance)
      if (index < 0) return
      this.optionInstance.splice(index, 1)
    },
    onChange (value) {
      this.currentValue = value
      this.visible = false
    }
  },
  created () {
    this.$on('zk.select.addOptionInstance', this.onAddOptionInstance)
    this.$on('zk.select.removeOptionInstance', this.onRemoveOptionInstance)
    this.$on('zk.select.change', this.onChange)
  }
}
