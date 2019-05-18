<template>
  <div class="zk-form-item">
    <div class="zk-form-item-label">
      <span v-if="label">{{ label }}：</span>
    </div>
    <div class="zk-form-item-content">
      <slot :validate="validate" :clear-validate="clearValidate"></slot>
    </div>
    <div class="zk-form-item-error">
      <span v-if="validateState === 'error'">*{{ validateMessage }}</span>
    </div>
  </div>
</template>

<script>
import { get, validate } from '../../../../utils'
import emitter from '../../../../mixins/emitter'

export default {
  name: 'ZkFormItem',
  componentName: 'ZkFormItem',
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    rules: {
      type: Object
    },
    required: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      validateState: '',
      validateMessage: ''
    }
  },
  computed: {
    zkForm () {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'ZkForm') {
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    },
    fieldValue () {
      const model = this.zkForm.model
      if (!model || !this.prop) return
      return get(model, this.prop)
    }
  },
  methods: {
    // 获取校验规则
    getRules () {
      const formRules = this.zkForm.rules
      const selfRules = this.rules
      const requiredRule = this.required !== undefined ? { required: !!this.required } : []
      const selfFormRules = formRules && this.prop ? get(formRules, this.prop) : {}
      return [].concat(selfRules || selfFormRules || []).concat(requiredRule)
    },
    // 获取筛选过后的校验规则
    getFilteredRule (trigger) {
      const rules = this.getRules()
      return rules.filter(rule => {
        if (!rule.trigger || !trigger) return true
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1
        } else {
          return rule.trigger === trigger
        }
      }).map(rule => Object.assign({}, rule))
    },
    // 校验
    validate (trigger, callback) {
      const fn = (resolve, reject) => {
        const rules = this.getFilteredRule(trigger)
        if ((!rules || rules.length === 0) && this.required === undefined) {
          callback && callback()
          return resolve(true)
        }
        this.validateState = 'validating'
        const descriptor = {}
        if (rules && rules.length > 0) {
          rules.forEach(rule => {
            delete rule.trigger
          })
        }
        descriptor[this.prop] = rules
        const model = {}
        model[this.prop] = this.fieldValue
        validate(model, descriptor, {}, (errors, invalidFields) => {
          this.validateState = errors ? 'error' : 'success'
          this.validateMessage = (errors && errors[0] && errors[0].message) || ''
          callback && callback(this.validateMessage, invalidFields)
          return resolve(!!errors)
        })
      }
      if (callback) return fn(() => null, () => null)
      return new Promise(fn)
    },
    // 清除校验
    clearValidate () {
      this.validateState = ''
      this.validateMessage = ''
    },
    // 下边是触发校验
    onFieldBlur () {
      return this.validate('blur')
    },
    onFieldFocus () {
      return this.validate('focus')
    },
    onFieldChange () {
      return this.validate('change')
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('ZkForm', 'zk.form.addFieldInstance', [this])

      const rules = this.getRules()

      if (rules.length || this.required !== undefined) {
        this.$on('zk.form.blur', this.onFieldBlur)
        this.$on('zk.form.focus', this.onFieldFocus)
        this.$on('zk.form.change', this.onFieldChange)
      }
    }
  },
  beforeDestroy () {
    if (this.prop) {
      this.dispatch('ZkForm', 'zk.form.removeFieldInstance', [this])
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-form-item {
  font-size: 14px;
  line-height: 28px;
  color: #656565;
  .zk-form-item-label {
    color: #656565;
  }
  .zk-form-item-error {
    color: #FF5A00;
    padding-left: 16px;
    font-size: 12px;
    line-height: 15px;
    min-height: 15px;
  }
}
</style>
