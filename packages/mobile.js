import MobileComponents from './components/mobile/async'
import GlobalComponents from './components/global/async'

import { TransferDom } from './directives'
import utils from './utils'

export * from './components/global/async'
export * from './components/web/async'

const install = function (Vue, opts = {}) {
  Vue.MobileComponents = MobileComponents
  Vue.GlobalComponents = GlobalComponents

  Vue.use(MobileComponents)
  Vue.use(GlobalComponents)

  Vue.prototype.$utils = utils

  Vue.directive('transfer-dom', TransferDom)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ...MobileComponents,
  ...GlobalComponents,
  install
}
