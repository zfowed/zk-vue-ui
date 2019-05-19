
import emitter from '../../emitter'

export default {
  name: 'ZkOption',
  componentName: 'ZkOption',
  mixins: [emitter],
  inject: {
    zkSelect: {
      default: undefined
    }
  },
  props: {
    value: {
      type: [String, Number, Object],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelected () {
      if (!this.zkSelect) return
      return this.zkSelect.currentValue === this.value
    },
    currentLabel () {
      if (typeof this.label === 'string' || typeof this.label === 'number') {
        return String(this.label)
      } else if (typeof this.value === 'string' || typeof this.value === 'number') {
        return String(this.value)
      }
      return ''
    }
  },
  methods: {
    handleClick () {
      this.dispatch('ZkSelect', 'zk.select.change', [this.value])
    }
  },
  mounted () {
    this.dispatch('ZkSelect', 'zk.select.addOptionInstance', [this])
  },
  beforeDestroy () {
    this.dispatch('ZkSelect', 'zk.select.removeOptionInstance', [this])
  }
}
