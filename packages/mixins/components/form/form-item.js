// 接收的参数 prop rules required
// 可处理的参数 validateState validateMessage
// 需要处理的方法
// 可使用的方法 validate clearValidate

import { get, set, validate } from '../../../utils'
import emitter from '../../emitter'

const defaultValue = Symbol('value')

export default {
  componentName: 'ZkFormItem',
  mixins: [emitter],
  inject: {
    zkForm: {
      default: undefined
    }
  },
  props: {
    prop: {
      type: String,
      default: ''
    },
    props: {
      type: Array
    },
    value: {
      default: defaultValue
    },
    rules: {
      type: [Object, Array]
    },
    error: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: undefined
    }
  },
  provide () {
    return {
      zkFormItem: this
    }
  },
  data () {
    return {
      validateState: '',
      validateMessage: '',
      currentRequired: this.required
    }
  },
  computed: {
    currentProps () {
      if (this.value !== defaultValue) return ['value']
      return this.props || (this.prop && [this.prop]) || []
    },
    isError () {
      return this.validateState === 'error'
    }
  },
  watch: {
    error: {
      deep: true,
      handler () {
        this.validateState = this.error ? 'error' : 'success'
        this.validateMessage = this.error || ''
      }
    }
  },
  methods: {
    pathToArray (path) {
      return Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
    },
    // 获取校验参数
    getValidateParams () {
      let formModel = this.value !== defaultValue ? { value: this.value } : ((this.zkForm && this.zkForm.model) || {})
      let formDescriptor = (this.zkForm && this.zkForm.rules) || {}
      let formRules = formDescriptor
      let selfRules = this.rules
      let requiredRule = this.required !== undefined ? { required: !!this.required } : []
      let descriptor = {}
      let props = this.currentProps
      let model = {}

      this.currentRequired = this.required

      for (const prop of props) {
        if (prop) {
          let propPathArray = this.pathToArray(prop)
          let __descriptor = descriptor
          let __formRules = formRules
          for (let i = 0; i < propPathArray.length; i++) {
            const key = propPathArray[i]
            if (__formRules) __formRules = __formRules[key] || null
            if (i < propPathArray.length - 1) {
              __descriptor[key] = { type: 'object', required: true, fields: {} }
              __descriptor = __descriptor[key].fields
            } else {
              const rules = [].concat(selfRules || __formRules || []).concat(requiredRule)
              if (rules.length) __descriptor[key] = rules
              this.currentRequired = rules.some(rule => rule.required)
            }
          }
          set(model, prop, get(formModel, prop))
        }
      }
      return { model, descriptor }
    },
    // 校验
    validate (trigger, callback) {
      const fn = resolve => {
        if (this.error) {
          this.validateState = 'error'
          this.validateMessage = this.error
          return resolve(true)
        }
        this.$nextTick(() => {
          const { model, descriptor } = this.getValidateParams()
          validate(model, descriptor, {}, (errors, invalidFields) => {
            this.validateState = errors ? 'error' : 'success'
            this.validateMessage = (errors && errors[0] && errors[0].message) || ''
            callback && callback(this.validateMessage, invalidFields)
            return resolve && resolve(!!errors)
          })
        })
      }
      if (callback) return fn()
      return new Promise(fn)
    },
    // 清除校验
    clearValidate () {
      this.validateState = ''
      this.validateMessage = ''
    },
    // 下边是触发校验
    onFieldFocus () {
      // return this.validate('focus')
    },
    onFieldBlur () {
      return this.validate('blur')
    },
    onFieldChange () {
      return this.validate('change')
    }
  },
  mounted () {
    this.getValidateParams()
    if (this.currentProps.length) {
      this.dispatch('ZkForm', 'zk.form.addFieldInstance', [this])
      this.$on('zk.form.blur', this.onFieldBlur)
      this.$on('zk.form.focus', this.onFieldFocus)
      this.$on('zk.form.change', this.onFieldChange)
    }
  },
  beforeDestroy () {
    if (this.currentProps.length) {
      this.dispatch('ZkForm', 'zk.form.removeFieldInstance', [this])
    }
  }
}
