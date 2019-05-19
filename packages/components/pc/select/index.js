import Select from './src/select.vue'
import Option from './src/option.vue'

const components = [
  Option
]

Select.install = function (Vue) {
  Vue.component(Select.name, Select)
}

for (const Component of components) {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
}

export { Select, Option }
export default Select
