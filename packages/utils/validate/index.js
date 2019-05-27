import AsyncValidator from 'async-validator'

const defaultConfig = { firstFields: true }

export default function (model, rules, config, callback) {
  const fn = (resolve, reject) => {
    const currentConfig = Object.assign({}, defaultConfig, config || {})
    const validator = new AsyncValidator(rules)
    validator.validate(model, currentConfig, (errors, invalidFields) => {
      callback && callback(errors, invalidFields)
      if (errors) return reject && reject(new Error(false))
      return resolve && resolve(true)
    })
  }
  if (callback) return fn()
  return new Promise(fn)
}
