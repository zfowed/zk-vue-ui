// 接收的参数 value disabled trueLabel falseLabel
// 可处理的参数 currentChecked currentDisabled
// 需要处理的方法
// 可使用的方法

import { FormItemSlot } from '../form'

export default {
  componentName: 'ZkCheckbox',
  mixins: [FormItemSlot],
  inject: {
    zkForm: {
      default: undefined
    },
    zkFormItem: {
      default: undefined
    }
  },
  props: {
    trueLabel: {
      default: true
    },
    falseLabel: {
      default: false
    }
  },
  computed: {
    currentChecked: {
      get () {
        return this.currentValue === this.trueLabel
      },
      set (value) {
        this.currentValue = value ? this.trueLabel : this.falseLabel
      }
    }
  },
  watch: {
    currentValue () {
      this.$emit('change', this.currentValue)
    }
  }
}
