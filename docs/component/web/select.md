## Select 选择框

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-select v-model="value" placeholder="请选择">
      <zk-option value="1">选项1</zk-option>
      <zk-option value="2">选项2</zk-option>
      <zk-option value="3">选项3</zk-option>
      <zk-option value="4">选项4</zk-option>
      <zk-option value="5">选项5</zk-option>
      <zk-option value="6">选项6</zk-option>
      <zk-option value="7">选项7</zk-option>
    </zk-select>
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