<template>
  <div class="zk-steps">
    <div class="zk-steps-progress">
      <slot></slot>
    </div>
    <div class="zk-steps-marks">
      <div
        v-for="(slot, i) in $slots.default"
        :key="i"
        :class="['zk-steps-marks-item', {
          complete: i < currentIndex,
          active: i === currentIndex,
          error: i === currentIndex && error
        }]">
        <span>{{ i + 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZkSteps',
  componentName: 'ZkSteps',
  provide () {
    return {
      zkSteps: this
    }
  },
  props: {
    value: {},
    options: { type: Array },
    error: { type: Boolean, default: false }
  },
  data () {
    return {
      values: []
    }
  },
  computed: {
    currentIndex () {
      return this.values.findIndex(value => value === this.value)
    }
  },
  methods: {
    updateValues () {
      this.values = this.$slots.default.map((slot, index) => {
        if (!slot.componentInstance) return
        return slot.componentInstance.value
      })
    }
  },
  mounted () {
    this.updateValues()
  }
}
</script>

<style lang="scss" scoped>
.zk-steps {
  width: 100%;
  box-sizing: border-box;
}
.zk-steps-progress {
  display: flex;
  height: 24px;
  line-height: 24px;
  width: 100%;
  margin-top: 8px;
  .zk-steps-progress-item {
    height: 24px;
    line-height: 24px;
    align-items: center;
    flex-shrink: 1;
    flex-basis: 50%;
    text-align: center;
    border-radius: 24px;
    color: #656565;
    transition: color .2s;
    &.complete,
    &.active {
      color: #0B7AFB;
    }
    &.error {
      color: #656565;
    }
  }
}
.zk-steps-marks {
  margin-top: 14px;
  display: flex;
  width: 100%;
  height: 30px;
  position: relative;
  .zk-steps-marks-item {
    align-items: center;
    flex-shrink: 1;
    flex-basis: 50%;
    text-align: center;
    position: relative;
    z-index: 1;
    overflow: hidden;
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      margin-top: -1px;
      height: 2px;
      width: 100%;
      background-color: #F8F8F8;
      background-size: auto 100%;
      transition: background-color .2s;
      z-index: 2;
    }
    &::before {
      right: 50%;
    }
    &::after {
      left: 50%;
    }
    &:first-child::before,
    &:last-child::after {
      display: none;
    }
    span {
      position: relative;
      z-index: 3;
      display: block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      background-color: #F8F8F8;
      color: #656565;
      transition: background-color .2s, color .2s;
      font-size: 14px;
      margin: 0 auto;
    }
    &.complete {
      &::before,
      &::after {
        background-color: #0B7AFB;
      }
      span {
        background-color: #0B7AFB;
        color: #FFFFFF;
      }
    }
    &.active {
      &::before {
        background-color: #0B7AFB;
      }
      span {
        background-color: #0B7AFB;
        color: #FFFFFF;
      }
    }
    &.error {
      span {
        background-color: #F36D00;
      }
    }
  }
}
</style>
