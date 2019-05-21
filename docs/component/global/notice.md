## Notice 垂直公告无缝滚动

### 引入组件

```javascript
import Notice from 'zk-vue-ul/packages/components/global/notice'
import NoticeItem from 'zk-vue-ul/packages/components/global/notice-item'
```

### 使用方式

```html
/*vue*/

<template>
  <div>
    <zk-notice>
      <zk-notice-item>第一条公告，第一条公告，第一条公告，第一条公告</zk-notice-item>
      <zk-notice-item>第二条公告，第二条公告，第二条公告，第二条公告</zk-notice-item>
      <zk-notice-item>第三条公告，第三条公告，第三条公告，第三条公告</zk-notice-item>
      <zk-notice-item>第四条公告，第四条公告，第四条公告，第四条公告</zk-notice-item>
      <zk-notice-item>第五条公告，第五条公告，第五条公告，第五条公告</zk-notice-item>
    </zk-notice>
  </div>
</template>

<script>
  export default {}
</script>
```

### 多行

```html
/*vue*/

<template>
  <div>
    <zk-notice :row="4">
      <zk-notice-item>第一条公告，第一条公告，第一条公告，第一条公告</zk-notice-item>
      <zk-notice-item>第二条公告，第二条公告，第二条公告，第二条公告</zk-notice-item>
      <zk-notice-item>第三条公告，第三条公告，第三条公告，第三条公告</zk-notice-item>
      <zk-notice-item>第四条公告，第四条公告，第四条公告，第四条公告</zk-notice-item>
      <zk-notice-item>第五条公告，第五条公告，第五条公告，第五条公告</zk-notice-item>
    </zk-notice>
  </div>
</template>

<script>
  export default {}
</script>
```

### 控制速度

```html
/*vue*/

<template>
  <div>
    <zk-notice :row="4" :delay="1000" :duration="600">
      <zk-notice-item>第一条公告，第一条公告，第一条公告，第一条公告</zk-notice-item>
      <zk-notice-item>第二条公告，第二条公告，第二条公告，第二条公告</zk-notice-item>
      <zk-notice-item>第三条公告，第三条公告，第三条公告，第三条公告</zk-notice-item>
      <zk-notice-item>第四条公告，第四条公告，第四条公告，第四条公告</zk-notice-item>
      <zk-notice-item>第五条公告，第五条公告，第五条公告，第五条公告</zk-notice-item>
    </zk-notice>
  </div>
</template>

<script>
  export default {}
</script>
```
