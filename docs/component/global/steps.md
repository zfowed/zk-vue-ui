## Steps 步骤条

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-steps value="1">
      <zk-steps-item value="1">步骤 1</zk-steps-item>
      <zk-steps-item value="2">步骤 2</zk-steps-item>
      <zk-steps-item value="3">步骤 3</zk-steps-item>
      <zk-steps-item value="4">步骤 4</zk-steps-item>
      <zk-steps-item value="5">步骤 5</zk-steps-item>
    </zk-steps>
  </div>
</template>

<script>
  export default {}
</script>
```

### 错误状态

```html
/*vue*/

<template>
  <div>
    <zk-steps value="3" error>
      <zk-steps-item value="1">步骤 1</zk-steps-item>
      <zk-steps-item value="2">步骤 2</zk-steps-item>
      <zk-steps-item value="3">步骤 3</zk-steps-item>
      <zk-steps-item value="4">步骤 4</zk-steps-item>
      <zk-steps-item value="5">步骤 5</zk-steps-item>
    </zk-steps>
  </div>
</template>

<script>
  export default {}
</script>
```
