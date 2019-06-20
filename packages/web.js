// import 'es6-promise/auto'

import GlobalComponents from './components/global/async'
import WebComponents from './components/web/async'

import Toast from './components/global/toast'

import { TransferDom } from './directives'
import utils from './utils'

export * from './components/global/async'
export * from './components/web/async'

const install = function (Vue, opts = {}) {
  Vue.WebComponents = WebComponents
  Vue.GlobalComponents = GlobalComponents

  Vue.use(WebComponents)
  Vue.use(GlobalComponents)

  Vue.prototype.$utils = utils

  Vue.prototype.$toast = Toast.toast

  Vue.directive('transfer-dom', TransferDom)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ...WebComponents,
  ...GlobalComponents,
  install
}
