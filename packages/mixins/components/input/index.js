// 接收的参数 value resize disabled type autosize autocomplete
// 可处理的参数 currentValue currentDisabled isFocus isOnComposition textareaStyle
// 需要处理的方法 handleComposition handleInput handleFocus handleBlur handleChange handleIconClick
// 可使用的方法 resizeTextarea

import { FormItemSlot } from '../form'
import calcTextareaHeight from './utils/calcTextareaHeight'

export default {
  mixins: [FormItemSlot],
  props: {
    value: [String, Number],
    resize: String,
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
    textareaStyle () {
      return Object.assign({}, this.textareaCalcStyle, { resize: this.resize })
    }
  },
  watch: {
    currentValue () {
      this.$nextTick(this.resizeTextarea)
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
      this.currentValue = event.target.value
    },
    handleFocus (event) {
      this.isFocus = true
      this.$emit('focus', event)
      this.handleFormFocus()
    },
    handleBlur (event) {
      this.isFocus = false
      this.$emit('blur', event)
      this.handleFormBlur()
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    handleIconClick (event) {
      if (this.isFocus) return
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
