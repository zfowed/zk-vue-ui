## Swiper 触摸滑动

### 轮播图

基础使用

```html
/*vue*/

<template>
  <div class="demo-2">
    <zk-swiper>
      <zk-swiper-slide v-for="i in 3" :key="i">
        <img :src="`https://uploadbeta.com/api/pictures/random/?t=${i}`">
      </zk-swiper-slide>
    </zk-swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style>
.demo-1 img {
  max-width: 100%;
}
</style>
```

常用配置

```html
/*vue*/

<template>
  <div class="demo-2">
    <zk-swiper class="swiper" :options="options">
      <zk-swiper-slide v-for="i in 3" :key="i">
        <img :src="`https://uploadbeta.com/api/pictures/random/?t=${i}`">
      </zk-swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </zk-swiper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: {

          // 开启鼠标的抓手形状
          grabCursor: true,

          // 8秒自动轮播
          autoplay: {
            delay: 8000,
            disableOnInteraction: false
          },

          // 使得freeMode也能自动贴合
          freeModeSticky: true,

          // 底部进度条 clickable 可点击
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },

          // 两侧导航键
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style>
.demo-2 img {
  max-width: 100%;
}
</style>
```

!> 更多功能请自行摸索
