import Notice from './src/notice.vue'
import NoticeItem from './src/notice-item.vue'

const components = [
  NoticeItem
]

Notice.install = function (Vue) {
  Vue.component(Notice.name, Notice)
  for (const Component of components) {
    Vue.component(Component.name, Component)
  }
}

for (const Component of components) {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
}

export { Notice, NoticeItem }
export default Notice
