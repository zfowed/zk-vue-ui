
## NPM 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
npm i zk-vue-ui -S
```

## 按需加载在 VUE CLI 3

### 编辑 `vue.config.js` 文件

```javascript
module.exports = {
  // 扩展 webpack 配置，使 zk-vue-ul 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('zk-vue-ul')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
```

### 使用组件

```javascript
import { Notice } from 'zk-vue-ul/packages/components/global/notice'

Vue.use(Notice)
// OR
Vue.component(Notice.name, Notice)
```

> `zk-vue-ul/packages/components/global`：`zk-vue-ul` 全局组件
> `zk-vue-ul/packages/components/pc`：`zk-vue-ul` 电脑端组件
> `zk-vue-ul/packages/components/mobile`：`zk-vue-ul` 移动端组件
