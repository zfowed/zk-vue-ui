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
      const instanceValidate = function (instance) {
        return new Promise((resolve, reject) => {
          return instance.validate(undefined, (errorMessage, invalidFields) => {
            return resolve([].concat(...Object.values(invalidFields || {})))
          })
        })
      }
      const fn = (resolve, reject) => {
        return Promise.all(this.fieldInstanceList.map(instance => {
          return instanceValidate(instance)
        })).then(results => {
          const errors = [].concat(...results)
          const error = !!errors.length
          callback && callback(error, errors)
          if (error) return reject && reject(error)
          return resolve && resolve(error)
        })
      }
      if (callback) return fn()
      return new Promise(fn)
    },
    validateAndScroll (callback) {
      const fn = (resolve, reject) => {
        return this.validate((error, errors) => {
          return this.$nextTick(() => {
            const errorInstance = this.fieldInstanceList.find(instance => instance.isError)
            if (errorInstance) {
              const $el = errorInstance.$el
              if ($el.scrollIntoView && $el.scrollIntoView) $el.scrollIntoView(true)
            }
            callback && callback(error, errors)
            if (error) return reject && reject(error)
            return resolve && resolve(error)
          })
        })
      }
      if (callback) return fn()
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
