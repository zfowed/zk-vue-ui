<template>
  <div
    class="notice"
    :style="currentStyle">
    <div
      class="notice-slot"
      ref="slot"
      :style="currentSlotStyle">
      <div class="notice-slot-1" ref="slot1">
        <slot></slot>
      </div>
      <div class="notice-slot-2" ref="slot2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZkNotice',
  props: {
    data: {},
    delay: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 600
    },
    row: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      timer: undefined,
      slotsLength: 0,
      childConfig: [],
      currentChildIndex: 0
    }
  },
  computed: {
    currentChildConfig () {
      return this.childConfig[this.currentChildIndex] || null
    },
    currentStyle () {
      const config = this.currentChildConfig
      let height = 0
      for (let index = 0; index < this.row; index++) {
        const config = this.childConfig[this.currentChildIndex + index]
        if (config) {
          height += config.clientHeight
        }
      }
      let style = {}
      if (config) {
        style['height'] = `${height}px`
      }
      return style
    },
    currentSlotStyle () {
      const config = this.currentChildConfig
      let style = {}
      if (config) {
        style['top'] = `-${config.offsetTop}px`
      }
      if (this.currentChildIndex > 0) {
        style['transition'] = `top ${this.duration / 1000}s ease`
      }
      return style
    }
  },
  watch: {
    data () {
      this.$nextTick(this.updateChildConfig)
    },
    currentChildIndex () {
      if (this.currentChildIndex === this.slotsLength) {
        setTimeout(() => {
          this.currentChildIndex = 0
        }, this.delay / 2)
      }
    },
    delay: 'createdTimer'
  },
  methods: {
    scrollNext () {
      this.updateChildConfig()
      if (!this.$refs.slot1 || !this.$refs.slot2) return
      let index = 0
      if (this.childConfig[this.currentChildIndex + 1]) {
        index = this.currentChildIndex + 1
      }
      this.currentChildIndex = index
    },
    updateChildConfig () {
      if (!this.$refs.slot1 || !this.$refs.slot2) return
      this.slotsLength = (this.$refs.slot1.children && this.$refs.slot1.children.length) || 0
      this.childConfig = [
        ...this.$refs.slot1.children,
        ...this.$refs.slot2.children
      ].map($el => {
        return {
          clientWidth: $el.clientWidth,
          clientHeight: $el.clientHeight,
          offsetTop: $el.offsetTop
        }
      })
    },
    createdTimer () {
      this.clearTimer()
      if (this.delay >= this.duration) {
        this.timer = setInterval(this.scrollNext, this.delay)
      }
    },
    clearTimer () {
      if (this.timer) clearInterval(this.timer)
    }
  },
  created () {
    this.createdTimer()
  },
  mounted () {
    this.updateChildConfig()
  },
  destroyed () {
    this.clearTimer()
  }
}
</script>

<style lang="scss" scoped>
.notice {
  overflow: hidden;
  width: 100%;
  transition: height .2s;
  .notice-slot {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
