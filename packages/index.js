import {
  Row,
  Col,
  TextLine,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  Checkbox,
  Radio,
  Popover,
  PopupLayer,
  Toast,
  Swiper,
  SwiperSlide
} from './components/global'
import {
  Button,
  Link,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Pagination,
  Message,
  Dialog,
  MessageBox,
  ImageView,
  ImageSelect,
  ImageUpload
} from './components/pc'
import { TransferDom } from './directives'
import utils from './utils'

const installs = [
  Row,
  Col,
  TextLine,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  Checkbox,
  Radio,
  Popover,
  PopupLayer,
  Toast,
  Swiper,
  SwiperSlide,

  Button,
  Link,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Pagination,
  Message,
  Dialog,
  MessageBox,
  ImageView,
  ImageSelect,
  ImageUpload
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
  Vue.prototype.$msgbox = MessageBox.msgbox
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$close = MessageBox.close

  Vue.directive('transfer-dom', TransferDom)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Row,
  Col,
  TextLine,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  Checkbox,
  Radio,
  Popover,
  PopupLayer,
  Toast,
  Swiper,
  SwiperSlide,

  Button,
  Link,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Pagination,
  Message,
  Dialog,
  MessageBox,
  ImageView,
  ImageSelect,
  ImageUpload
}
export default {
  install,

  Row,
  Col,
  TextLine,
  Table,
  TableHead,
  TableBody,
  TableTr,
  TableTh,
  TableTd,
  Checkbox,
  Radio,
  Popover,
  PopupLayer,
  Toast,
  Swiper,
  SwiperSlide,

  Button,
  Link,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  DatePicker,
  Pagination,
  Message,
  Dialog,
  MessageBox,
  ImageView,
  ImageSelect,
  ImageUpload
}
