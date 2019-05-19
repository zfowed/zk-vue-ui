import Countdown from './src/countdown.vue'

Countdown.install = function (Vue) {
  Vue.component(Countdown.name, Countdown)
}

export default Countdown
