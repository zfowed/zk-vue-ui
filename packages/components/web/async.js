import Message from './message'
import MessageBox from './message-box'

const Form = () => import(/* webpackChunkName: "zk-form" */ './form')
const FormItem = () => import(/* webpackChunkName: "zk-form-item" */ './form-item')
const Input = () => import(/* webpackChunkName: "zk-input" */ './input')
const Select = () => import(/* webpackChunkName: "zk-select" */ './select')
const Option = () => import(/* webpackChunkName: "zk-option" */ './option')
const DatePicker = () => import(/* webpackChunkName: "zk-date-picker" */ './date-picker')
const Button = () => import(/* webpackChunkName: "zk-button" */ './button')
const Link = () => import(/* webpackChunkName: "zk-link" */ './link')
const Pagination = () => import(/* webpackChunkName: "zk-pagination" */ './pagination')
const Dialog = () => import(/* webpackChunkName: "zk-dialog" */ './dialog')
// const Message = () => import(/* webpackChunkName: "zk-message" */ './message')
// const MessageBox = () => import(/* webpackChunkName: "zk-message-box" */ './message-box')
const ImageView = () => import(/* webpackChunkName: "zk-image-view" */ './image-view')
const ImageSelect = () => import(/* webpackChunkName: "zk-image-select" */ './image-select')
const ImageUpload = () => import(/* webpackChunkName: "zk-image-upload" */ './image-upload')
const Alert = () => import(/* webpackChunkName: "zk-alert" */ './alert')

const Components = {
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

const install = function (Vue, opts = {}) {
  for (const [key, ComponentAsync] of Object.entries(Components)) {
    Vue.component(`Zk${key}`, ComponentAsync)
  }
  Vue.prototype.$message = Message.message
  Vue.prototype.$msgbox = MessageBox.msgbox
  Vue.prototype.$alert = MessageBox.msgbox.alert
  Vue.prototype.$confirm = MessageBox.msgbox.confirm
  Vue.prototype.$prompt = MessageBox.msgbox.prompt
}

export default {
  install,
  ...Components
}
