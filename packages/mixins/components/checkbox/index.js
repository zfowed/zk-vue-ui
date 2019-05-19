import emitter from '../../emitter'

export default {
  componentName: 'ZkCheckbox',
  mixins: [emitter],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: {
      default: true
    },
    falseLabel: {
      default: false
    },
    id: String,
    border: Boolean
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