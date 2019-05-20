## Message 消息提示

### 组件模式

```html
/*vue*/

<template>
  <div>
    <zk-button @click="show('success')">成功</zk-button>
    <zk-button @click="show('warning')">警告</zk-button>
    <zk-button @click="show('error')">错误</zk-button>
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

```html
/*vue*/

<template>
  <div>
    <zk-button @click="show('success')">成功</zk-button>
    <zk-button @click="show('warning')">警告</zk-button>
    <zk-button @click="show('error')">错误</zk-button>
  </div>
</template>

<script>
  export default {
    methods: {
      show (type) {
        // 需要引入 Message 组件
        // this.$message = Message.message
        this.$message[type]('这是一段内容,这是一段内容,这是一段内容,这是一段内容。')
      }
    }
  }
</script>
```