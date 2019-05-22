import GlobalComponents from './components/global'
import WebComponents from './components/web'

import { TransferDom } from './directives'
import utils from './utils'

const install = function (Vue, opts = {}) {
  Vue.use(GlobalComponents)
  Vue.use(WebComponents)

  Vue.prototype.$utils = utils

  Vue.directive('transfer-dom', TransferDom)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = {
  ...GlobalComponents,
  ...WebComponents,
  install
}

module.exports.default = {
  ...GlobalComponents,
  ...WebComponents
}
