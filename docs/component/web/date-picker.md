## DatePicker 时间选择器

### 引入组件

```javascript
import DatePicker from 'zk-vue-ul/packages/components/global/date-picker'
```

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-date-picker v-model="value"></zk-date-picker>
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