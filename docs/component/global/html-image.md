# HtmlImage HTML生成图片

!> 注意！生成的图片可能会与效果图有些许差异，原因是应为 canvas 不支持一些 css 样式和 字体的原因，最好固定容器的大小。

### 使用方式

```html
/*vue*/

<template>
  <div>
    <zk-html-image>
      <zk-table>
        <zk-table-head>
          <zk-table-tr>
            <zk-table-th>日期</zk-table-th>
            <zk-table-th>姓名</zk-table-th>
            <zk-table-th>地址</zk-table-th>
          </zk-table-tr>
          </zk-table-head>
        <zk-table-body>
          <zk-table-tr v-for="i in 3" :key="i">
            <zk-table-td>2019-05-08</zk-table-td>
            <zk-table-td>不瞭望的怪人</zk-table-td>
            <zk-table-td>你猜不到~猜不到~</zk-table-td>
          </zk-table-tr>
        </zk-table-body>
      </zk-table>
    </zk-html-image>
  </div>
</template>

<script>
  export default {}
</script>
```

### 动态图片（慎用，会闪烁）

```html
/*vue*/

<template>
  <div class="demo-1">
    <zk-html-image class="htmlimage-container" :data="date">
      <div class="htmlimage-box">{{ date }}</div>
    </zk-html-image>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: new Date()
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.date = new Date()
      }, 1000)
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  }
</script>

<style>
.demo-1 .htmlimage-container {
  display: block;
}
.demo-1 .htmlimage-box {
  width: 100%;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  display: block;
}
</style>
```
