import Toast from './toast'

const Row = () => import(/* webpackChunkName: "zk-row" */ './row')
const Col = () => import(/* webpackChunkName: "zk-col" */ './col')
const Table = () => import(/* webpackChunkName: "zk-table" */ './table')
const TableHead = () => import(/* webpackChunkName: "zk-table-head" */ './table-head')
const TableBody = () => import(/* webpackChunkName: "zk-table-body" */ './table-body')
const TableTr = () => import(/* webpackChunkName: "zk-table-tr" */ './table-tr')
const TableTh = () => import(/* webpackChunkName: "zk-table-th" */ './table-th')
const TableTd = () => import(/* webpackChunkName: "zk-table-td" */ './table-td')
const TextLine = () => import(/* webpackChunkName: "zk-text-line" */ './text-line')
const Checkbox = () => import(/* webpackChunkName: "zk-checkbox" */ './checkbox')
const Radio = () => import(/* webpackChunkName: "zk-radio" */ './radio')
const Popover = () => import(/* webpackChunkName: "zk-popover" */ './popover')
const PopupLayer = () => import(/* webpackChunkName: "zk-popup-layer" */ './popup-layer')
// const Toast = () => import(/* webpackChunkName: "zk-toast" */ './toast')
const Swiper = () => import(/* webpackChunkName: "zk-swiper" */ './swiper')
const SwiperSlide = () => import(/* webpackChunkName: "zk-swiper-slide" */ './swiper-slide')
const Countdown = () => import(/* webpackChunkName: "zk-countdown" */ './countdown')
const HtmlImage = () => import(/* webpackChunkName: "zk-html-image" */ './html-image')
const Notice = () => import(/* webpackChunkName: "zk-notice" */ './notice')
const NoticeItem = () => import(/* webpackChunkName: "zk-notice-item" */ './notice-item')
const ImageContainer = () => import(/* webpackChunkName: "zk-image-container" */ './image-container')
const Steps = () => import(/* webpackChunkName: "zk-steps" */ './steps')
const StepsItem = () => import(/* webpackChunkName: "zk-steps-item" */ './steps-item')

const Components = {
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

const install = function (Vue, opts = {}) {
  for (const [key, ComponentAsync] of Object.entries(Components)) {
    Vue.component(`Zk${key}`, ComponentAsync)
  }
  Vue.$toast = Toast.toast
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...Components
}
