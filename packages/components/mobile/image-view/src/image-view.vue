<template>
  <div v-if="currentVisible" class="image-view-popup">
    <div class="image-view" v-if="visible">
      <div class="image-view-close" @click="currentVisible = false"></div>
      <zk-swiper
        v-if="!isRestart"
        class="image-swiper"
        :options="swiperOptions"
        @ready="handleReady"
        @slideChange="handleSlideChange">
        <zk-swiper-slide
          class="image-swiper-slide"
          v-for="(src, index) in currentSrcList"
          :key="index">
          <div class="image-flex">
            <img :src="src" />
          </div>
        </zk-swiper-slide>
      </zk-swiper>
      <div v-show="currentSrcList.length > 1">
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from '../../../global/swiper'

export default {
  name: 'ZkmImageView',
  components: {
    'zk-swiper': Swiper,
    'zk-swiper-slide': SwiperSlide
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    src: {
      type: String
    },
    srcList: {
      type: Array
    }
  },
  data () {
    return {
      isRestart: false,
      currentIndex: 0,
      swiperOptions: {
        loop: true, // 无缝轮播
        grabCursor: true, // 开启鼠标的抓手形状
        initialSlide: 0, // 初始 index
        freeModeSticky: true, // 使得freeMode也能自动贴合。
        autoHeight: true, // 自动高度
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  computed: {
    currentVisible: {
      get () {
        return this.visible
      },
      set (visible) {
        this.$emit('update:visible', visible)
      }
    },
    currentSrcList () {
      return Array.isArray(this.srcList) ? [...this.srcList] : [this.src]
    }
  },
  watch: {
    currentVisible (visible) {
      if (visible) {
        this.currentIndex = this.getInitIndex()
        this.swiperOptions.initialSlide = this.currentIndex
      }
    },
    index: 'updateInitIndex',
    currentIndex (index) {
      this.$emit('update:index', this.currentIndex)
    }
  },
  methods: {
    getInitIndex () {
      if (typeof this.index === 'number' && this.currentSrcList[this.index]) {
        return this.index
      } else if (this.src) {
        return this.currentSrcList.indexOf(this.src)
      }
      return 0
    },
    updateInitIndex () {
      this.currentIndex = this.getInitIndex()
      this.swiperOptions.initialSlide = this.currentIndex
    },
    slideTo (index) {
      if (this.swiper && this.currentIndex !== index) return this.swiper.slideToLoop(index)
      this.currentIndex = index
    },
    handleReady (swiper) {
      this.swiper = swiper
      this.$emit('ready', this.swiper)
    },
    handleSlideChange () {
      if (!this.swiper) return
      this.currentIndex = this.swiper.realIndex
    }
  },
  beforeDestroy () {
    this.$nextTick(function () {
      if (this.swiper) {
        delete this.swiper
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.image-view-popup {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: #000;
}
.image-view {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.image-view-close {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000;
  cursor: pointer;
}

.image-swiper {
  width: 100%;
  max-height: 100%;
  .image-swiper-slide {
    .image-flex {
      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
      }
    }
  }
}

.swiper-pagination {
  color: #fff;
}
</style>
