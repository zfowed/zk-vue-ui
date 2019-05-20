## Toast

### 组件模式

```html
/*vue*/

<template>
  <div>
    <zk-button @click="visible = !visible">点击我</zk-button>
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

```html
/*vue*/

<template>
  <div>
    <zk-button @click="showToast">点击我</zk-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showToast () {
        // 需要引入 Toast 组件
        // 等价 Toast.toast('这是一段内容,这是一段内容,这是一段内容,这是一段内容。')
        this.$toast('这是一段内容,这是一段内容,这是一段内容,这是一段内容。')
      }
    }
  }
</script>
```