<template>
  <zk-popup-layer
    :visible.sync="currentVisible"
    :custom-style="{ width: '100%', height: '100%' }">
    <div class="image-view-stage">
      <div class="image-view-close" @click="currentVisible = false"></div>
      <div class="image-view-left" v-if="currentIndex > 0" @click="toLeft"></div>
      <img class="image-view-img" :src="currentSrcList[currentIndex]">
      <div class="image-view-right" v-if="currentIndex < currentSrcList.length - 1" @click="toRight"></div>
    </div>
  </zk-popup-layer>
</template>

<script>
import PopupLayer from '../../../global/popup-layer'

export default {
  name: 'ZkImageView',
  components: {
    'zk-popup-layer': PopupLayer
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      required: true
    },
    srcList: {
      type: Array
    }
  },
  data () {
    return {
      currentIndex: Array.isArray(this.srcList) ? this.srcList.indexOf(this.src) : 0
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
      return Array.isArray(this.srcList) ? this.srcList : [this.src]
    }
  },
  watch: {
    currentVisible () {
      if (this.currentVisible) {
        this.currentIndex = Array.isArray(this.srcList) ? this.srcList.indexOf(this.src) : 0
      }
    },
    srcList () {
      this.currentIndex = Array.isArray(this.srcList) ? this.srcList.indexOf(this.src) : 0
    }
  },
  methods: {
    toLeft () {
      if (this.currentSrcList[this.currentIndex - 1]) {
        this.currentIndex -= 1
      }
    },
    toRight () {
      if (this.currentSrcList[this.currentIndex + 1]) {
        this.currentIndex += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image-view-stage {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5% 148px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
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
  .image-view-img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
  }
  .image-view-left,
  .image-view-right {
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
    cursor: pointer;
  }
  .image-view-left {
    // left: -(74px + 86px);
    left: 74px;
    background-image: url('~../assets/l1.png');
    &:hover {
      background-image: url('~../assets/l2.png');
    }
  }
  .image-view-right {
    // right: -(74px + 86px);
    right: 74px;
    background-image: url('~../assets/r1.png');
    &:hover {
      background-image: url('~../assets/r2.png');
    }
  }
}
</style>
