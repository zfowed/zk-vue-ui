import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const RouterView = { render: h => h('router-view') }

const view = function (path, component, meta, children) {
  let redirect
  if (!component) {
    component = RouterView
  } else if (typeof component === 'string') {
    redirect = component
    component = undefined
  }
  return { path, redirect, meta, component, children }
}

const routes = [
  // 首页
  view('/home', () => import('@/views/home'), { layout: 'primary', title: '首页', authUserInfo: true }),

  // 默认页
  view('/', '/home'),
  // 其他 跳首页
  view('/**', '/')
]

const router = new Router({ routes })

export default router
