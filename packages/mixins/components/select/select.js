
// 接收的参数 value placeholder disabled
// 可处理的参数 currentValue currentDisabled isFocus options option label
// 需要处理的方法
// 可使用的方法

import { FormItemSlot } from '../form'

export default {
  componentName: 'ZkSelect',
  mixins: [FormItemSlot],
  props: {
    value: {
      type: [String, Number, Object]
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  provide () {
    return {
      zkSelect: this
    }
  },
  data () {
    return {
      visible: false,
      isFocus: false,
      optionInstance: []
    }
  },
  computed: {
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
    currentValue () {
      this.$emit('change', this.currentValue)
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
