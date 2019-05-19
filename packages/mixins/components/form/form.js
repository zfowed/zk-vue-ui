// 接收的参数 model rules disabled
// 可处理的参数
// 需要处理的方法
// 可使用的方法 validate clearValidate

export default {
  componentName: 'ZkForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      zkForm: this
    }
  },
  data () {
    return {
      fieldInstanceList: []
    }
  },
  methods: {
    onAddFieldInstance (instance) {
      this.fieldInstanceList.push(instance)
    },
    onRemoveFieldInstance (instance) {
      const index = this.fieldInstanceList.indexOf(instance)
      if (index < 0) return
      this.fieldInstanceList.splice(index, 1)
    },
    validate (callback) {
      const fn = (resolve, reject) => {
        return Promise.all(this.fieldInstanceList.map(instance => {
          return new Promise((resolve, reject) => {
            instance.validate(undefined, (errorMessage, invalidFields) => {
              return resolve([].concat(...Object.values(invalidFields || {})))
            })
          }).catch(() => null)
        })).then(results => {
          const errors = [].concat(...results)
          callback && callback(errors)
          if (errors.length) return Promise.reject(new Error(false))
          return true
        })
      }
      if (callback) return fn(() => null, () => null)
      return new Promise(fn)
    },
    clearValidate () {
      for (const instance of this.fieldInstanceList) {
        instance.clearValidate()
      }
    }
  },
  created () {
    this.$on('zk.form.addFieldInstance', this.onAddFieldInstance)
    this.$on('zk.form.removeFieldInstance', this.onRemoveFieldInstance)
  }
}
