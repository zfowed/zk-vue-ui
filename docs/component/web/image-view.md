## ImageView 图片预览

### 基本使用

```html
/*vue*/

<template>
  <div class="demo-1">

    <div class="imgs">
      <img
        v-for="src in srcList"
        :key="src"
        :src="src"
        @click="show(src)">
    </div>

    <zk-image-view
      :visible.sync="visible"
      :src="src"
      :src-list="srcList">
    </zk-image-view>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        src: '',
        srcList: new Array(10).fill('0').map((v, i) => `https://uploadbeta.com/api/pictures/random/?t=${i}`),
        visible: false
      }
    },
    methods: {
      show (src) {
        this.src = src
        this.visible = true
      }
    }
  }
</script>

<style>
.demo-1 .imgs img {
  max-width: 200px;
}
</style>
```
