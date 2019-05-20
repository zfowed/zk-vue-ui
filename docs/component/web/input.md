## Input 输入框

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-input v-model="value" placeholder="谁便输入点什么吧~"></zk-input>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```

### 文本框

```html
/*vue*/

<template>
  <div>
    <zk-input v-model="value" type="textarea" :rows="3" placeholder="谁便输入点什么吧~"></zk-input>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>
```