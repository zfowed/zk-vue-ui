import { Row, Col, Table, TableHead, TableBody, TableTr, TableTh, TableTd, TextLine } from './components/global'
import { TransferDom } from './directives'
import utils from './utils'

const installs = [
  Row,
  Col,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  TextLine
]

const install = function (Vue, opts = {}) {
  installs.forEach(item => {
    if (item.install) {
      Vue.use(item)
    }
  })

  Vue.$utils = utils

  Vue.directive('transfer-dom', TransferDom)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Row, Col, Table, TableHead, TableBody, TableTr, TableTh, TableTd, TextLine }
export default { install, Row, Col, Table, TableHead, TableBody, TableTr, TableTh, TableTd, TextLine }