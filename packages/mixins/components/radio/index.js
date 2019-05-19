// 接收的参数 value disabled trueLabel falseLabel
// 可处理的参数 currentChecked currentDisabled
// 需要处理的方法
// 可使用的方法

import { FormItemSlot } from '../form'

export default {
  componentName: 'ZkRadio',
  mixins: [FormItemSlot],
  props: {
    label: {
      default: true
    }
  },
  computed: {
    currentChecked () {
      return this.currentValue === this.label
    }
  },
  watch: {
    currentValue () {
      this.$emit('change', this.currentValue)
    }
  }
}
