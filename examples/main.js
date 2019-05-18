import Vue from 'vue'
import App from './App.vue'
import ZkVueUi from '../packages'

Vue.config.productionTip = false

Vue.use(ZkVueUi)

new Vue({
  render: h => h(App)
}).$mount('#app')
