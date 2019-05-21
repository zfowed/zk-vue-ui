## ImageSelect 图片选择器

### 引入组件

```javascript
import ImageSelect from 'zk-vue-ul/packages/components/global/image-select'
```

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-image-select>
      <span slot="label">请选择图片</span>
      <span slot="select-label">重新选择</span>
    </zk-image-select>
  </div>
</template>

<script>
  export default {}
</script>
```

### 只读

```html
/*vue*/

<template>
  <div>
    <zk-image-select value="https://uploadbeta.com/api/pictures/random" readonly>
      <span slot="label">请选择图片</span>
      <span slot="select-label">重新选择</span>
    </zk-image-select>
  </div>
</template>

<script>
  export default {}
</script>
```

!> 其他参数自行摸索