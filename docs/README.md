
## NPM 安装 :id=hello-world

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```shell
npm i zk-vue-ui -S
```

## 编辑 `vue.config.js` 文件

扩展 webpack 配置，使 zk-vue-ul 可以编译

```javascript
module.exports = {
  transpileDependencies: ['zk-vue-ui/packages']
}
```

## 引入 zk-vue-ui

在 main.js 中写入以下内容：

web:

```javascript
import ZkVueUI from 'zk-vue-ui/web'

Vue.use(ZkVueUI)
```

mobile:

```javascript
import ZkVueUI from 'zk-vue-ui/mobile'

Vue.use(ZkVueUI)
```
