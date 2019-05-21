## MessageBox 弹框

### 引入组件

```javascript
import MessageBox from 'zk-vue-ul/packages/components/global/message-box'
```

服务模式

```javascript
const { msgbox } = MessageBox

msgbox.alert('弹出一个 Alert')
msgbox.confirm('弹出一个 Confirm')
```

### 组件模式

```html
/*vue*/

<template>
  <div>
    <zk-button @click="visible = true">点击我</zk-button>
    <zk-message-box :visible.sync="visible" title="标题">
      这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    </zk-message-box>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
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
    <zk-button @click="alert">alert</zk-button>
    <zk-button @click="confirm">confirm</zk-button>
  </div>
</template>

<script>
  export default {
    methods: {
      alert () {
        this.$alert('这是一段内容,这是一段内容,这是一段内容,这是一段内容。')
      },
      confirm () {
        this.$confirm('这是一段内容,这是一段内容,这是一段内容,这是一段内容。')
      }
    }
  }
</script>
```

### 参数

```javascript
  props: {
    // 是否显示 Dialog，支持 .sync 修饰符
    visible: {
      type: Boolean,
      default: false
    },
    // Dialog 的标题，也可通过具名 slot
    title: {
      type: String,
      default: '提示'
    },
    // MessageBox 消息正文内容
    message: {
      type: String
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: true
    },
    // 是否将 message 属性作为 HTML 片段处理
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    // Dialog 的自定义类名
    customClass: {
      type: String
    },
    // 是否可以通过点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    // 关闭前的回调，会暂停 Dialog 的关闭
    beforeClose: {
      type: Function
    },
    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: false
    },
    // 居中
    center: {
      type: Boolean,
      default: true
    },
    // 是否显示确定按钮
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    // 取消按钮的文本内容
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    // 确定按钮的文本内容
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    // 取消按钮的自定义类名
    cancelButtonClass: {
      type: String,
      default: 'dialog-footer-cancel'
    },
    // 确定按钮的自定义类名
    confirmButtonClass: {
      type: String,
      default: 'dialog-footer-confirm'
    }
  }
```