## Message 消息提示

### 引入组件

```javascript
import Message from 'zk-vue-ul/packages/components/global/message'
```

### 组件模式

```html
/*vue*/

<template>
  <div>
    <zk-button type="primary" @click="show('success')">成功</zk-button>
    <zk-button type="primary" @click="show('warning')">警告</zk-button>
    <zk-button type="primary" @click="show('error')">错误</zk-button>
    <zk-message :type="type" :visible.sync="visible">
      这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    </zk-message>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type: 'success',
        visible: false
      }
    },
    methods: {
      show (type) {
        if (type === this.type && this.visible) {
          this.visible = false
        } else {
          this.visible = true
          this.type = type
        }
      }
    }
  }
</script>
```

### 服务模式（使用 JS 调用）

```javascript
const { message } = MessageBox

message('弹出一个成功的 Message')
message.success('弹出一个成功的 Message')
message.warning('弹出一个警告的 Message')
message.error('弹出一个错误的 Message')
```

组件内部使用：

```javascript
this.$message('弹出一个成功的 Message')
this.$message.success('弹出一个成功的 Message')
this.$message.warning('弹出一个警告的 Message')
this.$message.error('弹出一个错误的 Message')
```
