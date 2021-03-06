<template>
  <zk-popup-layer
    :visible.sync="currentVisible"
    :custom-style="{ width: '100%', height: '100%' }">
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
        <div class="image-button-prev"></div>
        <div class="image-button-next"></div>
      </div>
    </div>
  </zk-popup-layer>
</template>

<script>
import PopupLayer from '../../../global/popup-layer'
import { Swiper, SwiperSlide } from '../../../global/swiper'

export default {
  name: 'ZkImageView',
  components: {
    'zk-popup-layer': PopupLayer,
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
        },
        navigation: {
          prevEl: '.image-button-prev',
          nextEl: '.image-button-next'
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
.image-view {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5% 148px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.image-view-close {
  position: absolute;
  top: 74px;
  right: 74px;
  width: 74px;
  height: 74px;
  line-height: 74px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  z-index: 5;
  background-color: #656565;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  background-image: url('~../assets/c1.png');
  &:hover {
    background-image: url('~../assets/c2.png');
  }
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

.image-button-prev,
.image-button-next {
  position: absolute;
  top: 50%;
  width: 74px;
  height: 74px;
  line-height: 74px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -37px;
  z-index: 4;
  background-color: #656565;
  background-repeat: no-repeat;
  background-position: center center;
  outline: none;
  cursor: pointer;
}
.image-button-prev {
  // left: -(74px + 86px);
  left: 74px;
  background-image: url('~../assets/l1.png');
  &:hover {
    background-image: url('~../assets/l2.png');
  }
}
.image-button-next {
  // right: -(74px + 86px);s
  right: 74px;
  background-image: url('~../assets/r1.png');
  &:hover {
    background-image: url('~../assets/r2.png');
  }
}
.swiper-pagination {
  color: #fff;
}
</style>
