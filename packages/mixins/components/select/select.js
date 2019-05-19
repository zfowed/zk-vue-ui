
export default {
  componentName: 'ZkSelect',
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
      currentValue: this.value,
      visible: false,
      currentWidth: 200,
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
    currentOption () {
      return this.options.find(option => option.value === this.currentValue)
    },
    currentLabel () {
      if (!this.currentOption) return ''
      return this.currentOption.label
    }
  },
  watch: {
    visible () {
      if (!this.visible) return
      this.handlePopoverUpdate()
    },
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValue)
    }
  },
  methods: {
    handlePopoverUpdate () {
      this.currentWidth = this.$refs.input.$el.clientWidth
    },
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
  mounted () {
    this.handlePopoverUpdate()
  },
  created () {
    this.$on('zk.select.addOptionInstance', this.onAddOptionInstance)
    this.$on('zk.select.removeOptionInstance', this.onRemoveOptionInstance)
    this.$on('zk.select.change', this.onChange)
  }
}
