<template>
  <div
    :class="['zk-image-container', {
      'zk-image-container--thumbnail': thumbnail
    }]"
    :style="{
      width: currentWidth,
      height: currentHeight
    }">
    <slot>
      <img :src="currentSrc" :alt="alt">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ZkImageContainer',
  props: {
    src: { type: String },
    alt: {},
    thumbnail: { type: Boolean, default: true },
    width: { type: [Number, String] },
    height: { type: [Number, String] }
  },
  computed: {
    currentSrc () {
      return this.src
    },
    currentWidth () {
      if (typeof this.width === 'number') return `${this.width}px`
      return this.width
    },
    currentHeight () {
      if (typeof this.height === 'number') return `${this.height}px`
      return this.height
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-image-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &.zk-image-container--thumbnail {
    background-color: #F8F8F8;
  }
  /deep/ img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
