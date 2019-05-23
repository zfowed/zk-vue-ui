<template>
  <div
    :class="['zk-text-line', {
      'zk-text-line--ellipsis': clamp === 1,
      'zk-text-line--clamp': clamp > 1,
    }]"
    :style="{
      width: styleWidth,
      '-webkit-line-clamp': clamp
    }">
    <slot>
      <span :title="text">{{ text }}</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ZkTextLine',
  componentName: 'ZkTextLine',
  props: {
    width: {
      type: [Number, String]
    },
    clamp: {
      type: Number,
      default: 1
    },
    text: {
      type: String
    }
  },
  computed: {
    styleWidth () {
      if (typeof this.width === 'number' || /^\d+$/.test(String(this.width))) {
        return `${this.width}px`
      }
      return this.width || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-text-line {
  display: block;
  overflow: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
}
.zk-text-line--ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zk-text-line--clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  // word-break: break-all;
}
</style>
