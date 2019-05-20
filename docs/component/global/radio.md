## Radio 单选框

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-radio v-model="value" label="1">选项1</zk-radio>
    <zk-radio v-model="value" label="2">选项2</zk-radio>
    <zk-radio v-model="value" label="3">选项3</zk-radio>
    <zk-radio v-model="value" label="4">选项4</zk-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: "1"
      }
    }
  }
</script>

<desc>
  通过 `label` 属性设置每一项的值。
<desc>
```
