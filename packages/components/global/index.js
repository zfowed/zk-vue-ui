import Row from './row'
import Col from './col'
import Table from './table'
import TableHead from './table-head'
import TableBody from './table-body'
import TableTr from './table-tr'
import TableTh from './table-th'
import TableTd from './table-td'
import TextLine from './text-line'
import Checkbox from './checkbox'
import Radio from './radio'
import Popover from './popover'
import PopupLayer from './popup-layer'
import Toast from './toast'
import Swiper from './swiper'
import SwiperSlide from './swiper-slide'
import Countdown from './countdown'
import HtmlImage from './html-image'
import Notice from './notice'
import NoticeItem from './notice-item'
import ImageContainer from './image-container'
import Steps from './steps'
import StepsItem from './steps-item'

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
  Swiper,
  SwiperSlide,
  Countdown,
  HtmlImage,
  Notice,
  NoticeItem,
  ImageContainer,
  Steps,
  StepsItem
}

const Components = [
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
  Swiper,
  SwiperSlide,
  Countdown,
  HtmlImage,
  Notice,
  NoticeItem,
  ImageContainer,
  Steps,
  StepsItem
]

const install = function (Vue, opts = {}) {
  for (const Component of Components) {
    Vue.use(Component)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...Components
}
