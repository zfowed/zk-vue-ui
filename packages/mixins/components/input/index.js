import emitter from '../../emitter'
import calcTextareaHeight from './utils/calcTextareaHeight'

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
    value: [String, Number],
    size: String,
    resize: String,
    form: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFocus: false,
      isOnComposition: false,
      textareaCalcStyle: {}
    }
  },
  computed: {
    currentValue: {
      get () {
        return this.value || ''
      },
      set (value) {
        return this.$emit('input', value)
      }
    },
    currentDisabled () {
      return this.disabled || (this.zkForm || {}).disabled
    },
    textareaStyle () {
      return Object.assign({}, this.textareaCalcStyle, { resize: this.resize })
    }
  },
  watch: {
    currentValue () {
      this.$nextTick(this.resizeTextarea)
      return this.dispatch('ZkFormItem', 'zk.form.change', [this.currentValue])
    }
  },
  methods: {
    handleComposition (event) {
      if (event.type === 'compositionstart') {
        this.isOnComposition = true
      }
      if (event.type === 'compositionend') {
        this.isOnComposition = false
        this.handleInput(event)
      }
    },
    handleInput (event) {
      if (this.isOnComposition) return

      if (event.target.value === this.currentValue) return

      this.$emit('input', event.target.value)

      if (typeof this.value === 'string') {
        this.$nextTick(() => {
          let input = this.getInput()
          input.value = this.value
        })
      }
    },
    handleFocus (event) {
      this.isFocus = true
      this.$emit('focus', event)
      this.dispatch('ZkFormItem', 'zk.form.focus', [this.currentValue])
    },
    handleBlur (event) {
      this.isFocus = false
      this.$emit('blur', event)
      this.dispatch('ZkFormItem', 'zk.form.blur', [this.currentValue])
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    handleIconClick (event) {
      const input = this.getInput()
      if (input && input.focus) {
        input.focus()
      }
    },
    resizeTextarea () {
      const { autosize, type } = this
      if (type !== 'textarea') return
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        }
        return
      }
      const minRows = autosize.minRows
      const maxRows = autosize.maxRows
      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
    },
    getInput () {
      return this.$refs.input || this.$refs.textarea
    }
  },
  mounted () {
    this.resizeTextarea()
  }
}
