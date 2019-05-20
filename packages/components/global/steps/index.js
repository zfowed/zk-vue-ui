import Steps from './src/steps.vue'
import StepsItem from './src/steps-item.vue'

const components = [
  StepsItem
]

Steps.install = function (Vue) {
  Vue.component(Steps.name, Steps)
  for (const Component of components) {
    Vue.component(Component.name, Component)
  }
}

for (const Component of components) {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
}

export { Steps, StepsItem }
export default Steps
