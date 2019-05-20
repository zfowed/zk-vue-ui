
## NPM 安装 :id=hello-world

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
npm i zk-vue-ui -S
```

## 在 VUE CLI 3 中模块化使用

不推荐全局加载，包太大了！！！
<!-- 
### 编辑 `vue.config.js` 文件

扩展 webpack 配置，使 zk-vue-ul 可以编译

```javascript
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('zk-vue-ul')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
``` -->

### 使用组件

```javascript
import { Notice, NoticeItem } from 'zk-vue-ul/packages/components/global/notice'

Vue.use(Notice)
Vue.use(NoticeItem)
// OR
Vue.component(Notice.name, Notice)
Vue.component(NoticeItem.name, NoticeItem)
```

> 点击获取全部 [组件](component/) 列表

### 使用工具方法

```javascript
import copyText from 'zk-vue-ul/packages/utils/copyText'

copyText('我是复制的文本...').then(() => {
  console.log('复制成功')
}, () => {
  console.log('复制失败')
})
```

> 点击获取全部 [工具方法](utils/) 列表
