// 接收的参数 value disabled trueLabel falseLabel
// 可处理的参数 currentChecked currentDisabled
// 需要处理的方法
// 可使用的方法

import emitter from '../../emitter'

export default {
  componentName: 'ZkCheckbox',
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
    trueLabel: {
      default: true
    },
    falseLabel: {
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
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
    },
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
      this.$emit('change', this.currentValue)
      this.dispatch('ZkFormItem', 'zk.form.change', [this.currentValue])
    }
  }
}
