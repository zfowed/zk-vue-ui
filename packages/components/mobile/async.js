const ImageView = () => import(/* webpackChunkName: "zkm-image-view" */ './image-view')

const Components = {
  ImageView
}

export {
  ImageView
}

const install = function (Vue, opts = {}) {
  for (const [key, ComponentAsync] of Object.entries(Components)) {
    Vue.component(`Zkm${key}`, ComponentAsync)
  }
}

export default {
  install,
  ...Components
}
