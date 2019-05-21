## ImageContainer 图片容器

用于控制图片在容器中，并使其居中图片

### 引入组件

```javascript
import ImageContainer from 'zk-vue-ul/packages/components/global/image-container'
```

### 使用方式

```html
/*vue*/

<template>
  <div>
    <zk-image-container width="200px" height="200px" src="https://uploadbeta.com/api/pictures/random">
    </zk-image-container>
  </div>
</template>

<script>
  export default {}
</script>
```

### 插槽模式

```html
/*vue*/

<template>
  <div>
    <zk-image-container width="200px" height="200px">
      <img src="https://uploadbeta.com/api/pictures/random">
    </zk-image-container>
  </div>
</template>

<script>
  export default {}
</script>
```

### 使用 class 控制大小

```html
/*vue*/

<template>
  <div class="demo-3">
    <zk-image-container class="container">
      <img src="https://uploadbeta.com/api/pictures/random">
    </zk-image-container>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.demo-3 .container {
  width: 200px;
  height: 200px;
}
</style>
```

### 取消背景 自定义样式

```html
/*vue*/

<template>
  <div class="demo-4">
    <zk-image-container class="container" :thumbnail="false">
      <img src="https://uploadbeta.com/api/pictures/random">
    </zk-image-container>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.demo-4 .container {
  width: 200px;
  height: 200px;
  border: solid 1px #999;
}
</style>
```
