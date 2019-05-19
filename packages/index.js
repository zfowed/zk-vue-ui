import { Row, Col, Table, TableHead, TableBody, TableTr, TableTh, TableTd, TextLine, Checkbox, Radio, Popover, PopupLayer, Toast } from './components/global'
import { Form, FormItem, Input, Select, Option, DatePicker, Button, Link, Pagination, Message, Dialog } from './components/pc'
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
  Radio,
  Popover,
  PopupLayer,
  Toast,

  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Button,
  Link,
  Pagination,
  Message,
  Dialog
]

const install = function (Vue, opts = {}) {
  installs.forEach(item => {
    if (item.install) {
      Vue.use(item)
    }
  })

  Vue.prototype.$utils = utils
  Vue.prototype.$toast = Toast.toast
  Vue.prototype.$message = Message.message

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
  Radio,
  Popover,
  PopupLayer,
  Toast,

  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Button,
  Link,
  Pagination,
  Message,
  Dialog
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
  Radio,
  Popover,
  PopupLayer,
  Toast,

  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Button,
  Link,
  Pagination,
  Message,
  Dialog
}
