import { Row, Col, Table, TableHead, TableBody, TableTr, TableTh, TableTd, TextLine, Checkbox, Popover } from './components/global'
import { Form, FormItem, Input, Select, Option, DatePicker } from './components/pc'
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
  TextLine,
  Checkbox,
  Popover,

  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker
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

export {
  Row,
  Col,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  TextLine,
  Checkbox,
  Popover,

  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker
}
export default {
  install,
  Row,
  Col,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  TextLine,
  Checkbox,
  Popover,

  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker
}
