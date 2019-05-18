import Table from './src/table.vue'
import TableHead from './src/table-head.vue'
import TableBody from './src/table-body.vue'
import TableTr from './src/table-tr.vue'
import TableTh from './src/table-th.vue'
import TableTd from './src/table-td.vue'

const components = [
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd
]

Table.install = function (Vue) {
  Vue.component(Table.name, Table)
  for (const Component of components) {
    Vue.component(Component.name, Component)
  }
}

for (const Component of components) {
  Component.install = function (Vue) {
    Vue.component(Component.name, Component)
  }
}

export {
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd
}
export default Table
