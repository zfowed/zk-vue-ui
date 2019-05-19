
import Swiper from './src/swiper.vue'
import SwiperSlide from './src/swiper-slide.vue'

const components = [
  SwiperSlide
]

Swiper.install = function (Vue) {
  Vue.component(Swiper.name, Swiper)
  for (const Component of components) {
    Vue.component(Component.name, Component)
  }
}

for (const Component of components) {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
}

export { Swiper, SwiperSlide }
export default Swiper
