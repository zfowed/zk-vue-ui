## Button 按钮

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-link href="#">链接</zk-link>
  </div>
</template>

<script>
  export default {}
</script>
```

### 取消下划线

```html
/*vue*/

<template>
  <div>
    <zk-link :underline="false" href="#">链接</zk-link>
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
    <zk-link disabled href="#">链接</zk-link>
  </div>
</template>

<script>
  export default {}
</script>
```