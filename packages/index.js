import GlobalComponents from './components/global/async'
import WebComponents from './components/web/async'

import { TransferDom } from './directives'
import utils from './utils'

export * from './components/global/async'
export * from './components/web/async'

const install = function (Vue, opts = {}) {
  Vue.GlobalComponents = GlobalComponents
  Vue.WebComponents = WebComponents

  Vue.use(GlobalComponents)
  Vue.use(WebComponents)

  Vue.prototype.$utils = utils

  Vue.directive('transfer-dom', TransferDom)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ...GlobalComponents,
  ...WebComponents,
  install
}
