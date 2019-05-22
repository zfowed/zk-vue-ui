import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Select from './select'
import Option from './option'
import DatePicker from './date-picker'
import Button from './button'
import Link from './link'
import Pagination from './pagination'
import Message from './message'
import Dialog from './dialog'
import MessageBox from './message-box'
import ImageView from './image-view'
import ImageSelect from './image-select'
import ImageUpload from './image-upload'
import Alert from './alert'

export {
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
  Dialog,
  MessageBox,
  ImageView,
  ImageSelect,
  ImageUpload,
  Alert
}

const Components = [
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
  Dialog,
  MessageBox,
  ImageView,
  ImageSelect,
  ImageUpload,
  Alert
]

const install = function (Vue, opts = {}) {
  for (const Component of Components) {
    Vue.use(Component)
  }
  Vue.prototype.$message = Message.message
  Vue.prototype.$msgbox = MessageBox.msgbox
  Vue.prototype.$alert = MessageBox.msgbox.alert
  Vue.prototype.$confirm = MessageBox.msgbox.confirm
  Vue.prototype.$prompt = MessageBox.msgbox.prompt
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...Components
}
