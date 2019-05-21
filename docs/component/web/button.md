## Button 按钮

### 引入组件

```javascript
import Button from 'zk-vue-ul/packages/components/global/button'
```

### 基本使用

```html
/*vue*/

<template>
  <div>
    <p>
      <zk-button>默认按钮</zk-button>
      <zk-button type="primary">主要按钮</zk-button>
    </p>
    <p>
      <zk-button plain>朴素按钮</zk-button>
      <zk-button plain type="primary">主要按钮</zk-button>
    </p>
  </div>
</template>

<script>
  export default {}
</script>
```

### 禁用

```html
/*vue*/

<template>
  <div>
    <zk-button disabled>按钮</zk-button>
  </div>
</template>

<script>
  export default {}
</script>
```
