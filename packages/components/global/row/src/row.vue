<template>
  <div :is="tag" :class="[
      'zk-row',
      `is-justify-${justify}`,
      `is-align-${align}`,
      { [`el-row--${type}`]: type }
    ]"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZkRow',
  componentName: 'ZkRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style () {
      const ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-row {
  position: relative;
  box-sizing: border-box;
  &::before,
  &::after {
    display: table;
    content: "";
  }
  &::after {
    clear: both
  }
  &.el-row--flex {
    display: flex;
    &:before,
    &:after {
      display: none;
    }
    &.is-justify-center {
      justify-content: center;
    }
    &.is-justify-end {
      justify-content: flex-end;
    }
    &.is-justify-space-between {
      justify-content: space-between;
    }
    &.is-justify-space-around {
      justify-content: space-around;
    }

    &.is-align-middle {
      align-items: center;
    }
    &.is-align-bottom {
      align-items: flex-end;
    }
  }
}
</style>
