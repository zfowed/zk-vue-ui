## Toast

### 引入组件

```javascript
import Toast from 'zk-vue-ul/packages/components/global/toast'
```

### 组件模式

```html
/*vue*/

<template>
  <div>
    <zk-button type="primary" @click="visible = !visible">点击我</zk-button>
    <zk-toast  :visible.sync="visible">
      这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    </zk-toast>
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

```javascript
Toast.toast('弹出一个 Toast')
```

组件内部使用：

```javascript
this.$toast('弹出一个 Toast')
```
