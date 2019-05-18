import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

const components = [
  FormItem
]

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
}

for (const Component of components) {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
}

export { Form, FormItem }
export default Form
