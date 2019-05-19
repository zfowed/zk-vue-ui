

<template>
  <span class="zk-popover">
    <span
      ref="reference"
      class="zk-popover-reference"
      :tabindex="tabindex"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      @mousedown="handleMousedown"
      @mouseup="handleMouseup">
      <slot name="reference"></slot>
    </span>
    <span v-transfer-dom>
      <transition name="fade">
        <div
          v-show="currentValue"
          ref="popper"
          :class="['zk-popover-popper', popperClass]"
          :style="{ width: styleWidth }"
          @mouseenter="handleMouseenter"
          @mouseleave="handleMouseleave">
          <slot>
            <span>{{ content }}</span>
          </slot>
        </div>
      </transition>
    </span>
  </span>
</template>

<script>
import Popper from 'popper.js'
import transferDom from '../../../../directives/transfer-dom'

export default {
  name: 'ZkPopover',
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    content: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    placement: {
      type: String,
      default: 'top'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 0
    },
    popperOptions: {
      type: Object,
      default () {
        return { boundariesElement: 'body', gpuAcceleration: false }
      }
    },
    popperClass: {
      type: String
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  directives: { transferDom },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    styleWidth () {
      if (typeof this.width === 'number' || /^\d+$/.test(String(this.width))) {
        return `${this.width}px`
      }
      return this.width || ''
    }
  },
  watch: {
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValue)
      if (!this.popper) return
      this.$nextTick(this.popper.update)
    }
  },
  methods: {
    handleClick () {
      if (this.trigger === 'click') {
        this.currentValue = !this.currentValue
      }
    },
    handleMouseenter () {
      if (this.trigger === 'hover') {
        this.currentValue = true
      }
    },
    handleMouseleave () {
      if (this.trigger === 'hover') {
        this.currentValue = false
      }
    },
    handleMousedown () {
      if (this.trigger === 'focus') {
        this.currentValue = true
      }
    },
    handleMouseup () {
      if (this.trigger === 'focus') {
        this.currentValue = false
      }
    },
    handleHide (event) {
      event = window.event || event
      const { reference, popper } = this.$refs
      const path = event.path || (event.composedPath && event.composedPath())
      if (path.indexOf(reference) < 0 && path.indexOf(popper) < 0) {
        this.currentValue = false
      }
    }
  },
  mounted () {
    const { reference, popper } = this.$refs
    this.popper = new Popper(reference, popper, Object.assign({}, this.popperOptions, {
      placement: this.placement,
      offsets: this.offset,
      removeOnDestroy: true
    }))
    setTimeout(() => window.addEventListener('click', this.handleHide, false), 0)
  },
  beforeDestroy () {
    if (!this.popper) return
    this.popper.destroy()
    this.popper = null
    window.removeEventListener('click', this.handleHide)
  }
}
</script>

<style lang="scss" scoped>
.zk-popover-reference {
  outline: none;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .6s ease;
}
.fade-leave,
.fade-leave-active,
.fade-leave-to {
  display: none;
}
</style>
