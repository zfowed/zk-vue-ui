
import ImageView from './image-view'

export {
  ImageView
}

const Components = [
  ImageView
]

const install = function (Vue, opts = {}) {
  for (const Component of Components) {
    Vue.use(Component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...Components
}
