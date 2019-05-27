
<template>
  <span :class="['zk-popover', { 'is-block': block }]">
    <div
      ref="reference"
      class="zk-popover-reference"
      :tabindex="tabindex"
      @click="handleClick"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      @mousedown="handleMousedown"
      @mouseup="handleMouseup">
      <slot name="reference"></slot>
    </div>
    <span v-transfer-dom>
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
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    transition: {
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
        return {
          modifiers: {
            preventOverflow: { boundariesElement: 'body' },
            flip: { boundariesElement: 'body' },
            computeStyle: { gpuAcceleration: false }
          }
        }
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
      this.$nextTick(() => this.updatePopper())
    }
  },
  methods: {
    setCurrentValue (value) {
      if (this.disabled && value) return
      this.currentValue = value
    },
    handleClick () {
      if (this.trigger === 'click') {
        this.setCurrentValue(!this.currentValue)
      }
    },
    handleMouseenter () {
      if (this.trigger === 'hover') {
        this.setCurrentValue(true)
      }
    },
    handleMouseleave () {
      if (this.trigger === 'hover') {
        this.setCurrentValue(false)
      }
    },
    handleMousedown () {
      if (this.trigger === 'focus') {
        this.setCurrentValue(true)
      }
    },
    handleMouseup () {
      if (this.trigger === 'focus') {
        this.setCurrentValue(false)
      }
    },
    handleHide (event) {
      if (this.trigger === 'manual') return
      event = window.event || event
      const { reference, popper } = this.$refs
      const path = event.path || (event.composedPath && event.composedPath())
      if (path.indexOf(reference) < 0 && path.indexOf(popper) < 0) {
        this.setCurrentValue(false)
      }
    },
    initPopper () {
      this.destroyPopper()
      const { reference, popper } = this.$refs
      if (!reference || !popper) return
      this.popper = new Popper(reference, popper, Object.assign({}, this.popperOptions, {
        placement: this.placement,
        // offsets: this.offset,
        removeOnDestroy: true
      }))
    },
    updatePopper () {
      if (!this.popper) return
      this.popper.update()
    },
    destroyPopper () {
      if (!this.popper) return
      this.popper.destroy()
      this.popper = null
    }
  },
  mounted () {
    this.initPopper()
    setTimeout(() => window.addEventListener('click', this.handleHide, false), 0)
  },
  beforeDestroy () {
    this.destroyPopper()
    window.removeEventListener('click', this.handleHide)
  }
}
</script>

<style lang="scss" scoped>
.zk-popover {
  display: block;
  display: inline;
  display: inline-block;
  .zk-popover-reference {
    display: inline;
    display: inline-block;
    outline: none;
  }
  &.is-block {
    display: block;
    width: 100%;
    .zk-popover-reference {
      display: block;
      width: 100%;
    }
  }
}
.zk-popover-popper {
  z-index: 3000;
}
</style>
