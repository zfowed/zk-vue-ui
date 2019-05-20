## Grid 栅格化布局

### 基础布局

使用单一分栏创建基础的栅格布局。

```html
/*vue*/

<template>
  <div class="demo-1">
    <zk-row>
      <zk-col :span="24"><div class="grid-content bg-purple-dark"></div></zk-col>
    </zk-row>
    <zk-row>
      <zk-col :span="12"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="12"><div class="grid-content bg-purple-light"></div></zk-col>
    </zk-row>
    <zk-row>
      <zk-col :span="8"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="8"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="8"><div class="grid-content bg-purple"></div></zk-col>
    </zk-row>
    <zk-row>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
    </zk-row>
    <zk-row>
      <zk-col :span="4"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="4"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="4"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="4"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="4"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="4"><div class="grid-content bg-purple-light"></div></zk-col>
    </zk-row>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .demo-1 .zk-row {
    margin-bottom: 20px;
  }
  .demo-1 .zk-row:last-child {
    margin-bottom: 0;
  }
  .demo-1 .zk-col {
    border-radius: 4px;
  }
  .demo-1 .bg-purple-dark {
    background: #99a9bf;
  }
  .demo-1 .bg-purple {
    background: #d3dce6;
  }
  .demo-1 .bg-purple-light {
    background: #e5e9f2;
  }
  .demo-1 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

<desc>
  通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。
<desc>
```

### 分栏间隔

分栏之间存在间隔。

```html
/*vue*/
<template>
  <div class="demo-2">
    <zk-row :gutter="20">
      <zk-col :span="6"><div class="grid-content"></div></zk-col>
      <zk-col :span="6"><div class="grid-content"></div></zk-col>
      <zk-col :span="6"><div class="grid-content"></div></zk-col>
      <zk-col :span="6"><div class="grid-content"></div></zk-col>
    </zk-row>
  <div>
</template>

<script>
  export default {}
</script>

<style>
  .demo-2 .zk-row {
    margin-bottom: 20px;
  }
  .demo-2 .zk-row:last-child {
    margin-bottom: 0;
  }
  .demo-2 .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background: #d3dce6;
  }
</style>

<desc>
  Row` 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。
<desc>
```

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

```html
/*vue*/

<template>
  <div class="demo-3">
    <zk-row :gutter="20">
      <zk-col :span="16"><div class="grid-content"></div></zk-col>
      <zk-col :span="8"><div class="grid-content"></div></zk-col>
    </zk-row>
    <zk-row :gutter="20">
      <zk-col :span="8"><div class="grid-content"></div></zk-col>
      <zk-col :span="8"><div class="grid-content"></div></zk-col>
      <zk-col :span="4"><div class="grid-content"></div></zk-col>
      <zk-col :span="4"><div class="grid-content"></div></zk-col>
    </zk-row>
    <zk-row :gutter="20">
      <zk-col :span="4"><div class="grid-content"></div></zk-col>
      <zk-col :span="16"><div class="grid-content"></div></zk-col>
      <zk-col :span="4"><div class="grid-content"></div></zk-col>
    </zk-row>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .demo-3 .zk-row {
    margin-bottom: 20px;
  }
  .demo-3 .zk-row:last-child {
    margin-bottom: 0;
  }
  .demo-3 .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background: #d3dce6;
  }
</style>
```

### 分栏偏移

支持偏移指定的栏数。

```html
/*vue*/

<template>
  <div class="demo-4">
    <zk-row :gutter="20">
      <zk-col :span="6"><div class="grid-content"></div></zk-col>
      <zk-col :span="6" :offset="6"><div class="grid-content"></div></zk-col>
    </zk-row>
    <zk-row :gutter="20">
      <zk-col :span="6" :offset="6"><div class="grid-content"></div></zk-col>
      <zk-col :span="6" :offset="6"><div class="grid-content"></div></zk-col>
    </zk-row>
    <zk-row :gutter="20">
      <zk-col :span="12" :offset="6"><div class="grid-content"></div></zk-col>
    </zk-row>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .demo-4 .zk-row {
    margin-bottom: 20px;
  }
  .demo-4 .zk-row:last-child {
    margin-bottom: 0;
  }
  .demo-4 .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background: #d3dce6;
  }
</style>

<desc>
  通过制定 `col` 组件的 `offset` 属性可以指定分栏偏移的栏数。
<desc>
```

### 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

```html
/*vue*/

<template>
  <div class="demo-5">
    <zk-row type="flex" class="row-bg">
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
    </zk-row>
    <zk-row type="flex" class="row-bg" justify="center">
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
    </zk-row>
    <zk-row type="flex" class="row-bg" justify="end">
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
    </zk-row>
    <zk-row type="flex" class="row-bg" justify="space-between">
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
    </zk-row>
    <zk-row type="flex" class="row-bg" justify="space-around">
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple-light"></div></zk-col>
      <zk-col :span="6"><div class="grid-content bg-purple"></div></zk-col>
    </zk-row>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .demo-5 .zk-row {
    margin-bottom: 20px;
  }
  .demo-5 .zk-row:last-child {
    margin-bottom: 0;
  }
  .demo-5 .bg-purple {
    background: #d3dce6;
  }
  .demo-5 .bg-purple-light {
    background: #e5e9f2;
  }
  .demo-5 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .demo-5 .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<desc>
  将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
<desc>
```

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

```html
/*vue*/

<template>
  <div class="demo-6">
    <zk-row :gutter="10">
      <zk-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></zk-col>
      <zk-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></zk-col>
      <zk-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></zk-col>
      <zk-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></zk-col>
    </zk-row>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .demo-6 .zk-row {
    margin-bottom: 20px;
  }
  .demo-6 .zk-row:last-child {
    margin-bottom: 0;
  }
  .demo-6 .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background: #d3dce6;
  }
</style>
```

### Row 参数

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|----|-------|-------|--------|
| gutter | 栅格间隔 | number | — | 0 |
| type | 布局模式，可选 flex，现代浏览器下有效 | string | — | — |
| justify | flex 布局下的水平排列方式 | string | start/end/center/space-around/space-between | start |
| align | flex 布局下的垂直排列方式 | string | top/middle/bottom | top |
| tag | 自定义元素标签 | string | * | div |

### Col 参数

| 参数  | 说明 | 类型 | 可选值 | 默认值 |
|-------|----|-------|-------|--------|
| span | 栅格占据的列数 | number | — | 24 |
| offset | 栅格左侧的间隔格数 | number | — | 0 |
| push | 栅格向右移动格数 | number | — | 0 |
| pull | 栅格向左移动格数 | number | — | 0 |
| xs | `<768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| sm | `≥768px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| md | `≥992px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| lg | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| xl | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | — | — |
| tag | 自定义元素标签 | string | * | div |
