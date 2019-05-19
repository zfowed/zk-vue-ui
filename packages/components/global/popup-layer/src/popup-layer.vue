<template>
  <span>
    <div v-transfer-dom="appendToBody" class="zk-popup">
      <transition name="zk-popup-fade">
        <div
          v-show="currentVisible && modal"
          class="zk-popup-mask"
          :style="{ 'z-index': zIndex }"
          @click="handleClickModal">
        </div>
      </transition>
      <transition :name="`zk-popup-fade-${placement}`">
        <div
          v-show="currentVisible"
          ref="slot"
          :class="['zk-popup-slot', { [`zk-popup-slot--${placement}`]: placement }]"
          :style="{ 'z-index': zIndex }"
          @transitionend="handleTransitionend">
          <slot></slot>
        </div>
      </transition>
    </div>
  </span>
</template>

<script>
import transferDom from '../../../../directives/transfer-dom'

let zIndex = 2000

export default {
  name: 'ZkPopupLayer',
  directives: {
    'transfer-dom': transferDom
  },
  props: {
    // 是否显示 Dialog，支持 .sync 修饰符
    visible: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'center'
    },
    // 是否可以通过点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      zIndex: zIndex++
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
    }
  },
  methods: {
    handleClickModal () {
      if (this.closeOnClickModal) {
        this.currentVisible = false
      }
    },
    handleTransitionend (event) {
      this.$emit('transitionend', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-popup {
  .zk-popup-mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 2000;
    background-color: rgba(0, 0, 0, .5);
    opacity: 1;
    transition: opacity .2s;
  }
  .zk-popup-slot {
    position: fixed;
    z-index: 2001;
    opacity: 1;
    transition: all .2s;
  }
  .zk-popup-slot--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .zk-popup-slot--top {
    top: 0;
    left: 0;
    right: 0;
    &-start { @extend .zk-popup-slot--top; right: auto; }
    &-end { @extend .zk-popup-slot--top; left: auto; }
  }
  .zk-popup-slot--bottom {
    bottom: 0;
    left: 0;
    right: 0;
    &-start { @extend .zk-popup-slot--bottom; right: auto; }
    &-end { @extend .zk-popup-slot--bottom; left: auto; }
  }
  .zk-popup-slot--left {
    left: 0;
    top: 0;
    bottom: 0;
    &-start { @extend .zk-popup-slot--left; bottom: auto; }
    &-end { @extend .zk-popup-slot--left; top: auto; }
  }
  .zk-popup-slot--right {
    right: 0;
    top: 0;
    bottom: 0;
    &-start { @extend .zk-popup-slot--right; bottom: auto; }
    &-end { @extend .zk-popup-slot--right; top: auto; }
  }
}
.zk-popup-fade-center-enter,
.zk-popup-fade-center-leave-active,
.zk-popup-fade-center-enter,
.zk-popup-fade-center-leave-active {
  opacity: 0 !important;
}

.zk-popup-fade-top-enter,
.zk-popup-fade-top-leave-active,
.zk-popup-fade-top-leave,
.zk-popup-fade-top-leave-active,
.zk-popup-fade-top-start-enter,
.zk-popup-fade-top-start-leave-active,
.zk-popup-fade-top-start-leave,
.zk-popup-fade-top-start-leave-active,
.zk-popup-fade-top-end-enter,
.zk-popup-fade-top-end-leave-active,
.zk-popup-fade-top-end-leave,
.zk-popup-fade-top-end-leave-active {
  transform: translateY(-100%)
}

.zk-popup-fade-right-enter,
.zk-popup-fade-right-leave-active,
.zk-popup-fade-right-leave,
.zk-popup-fade-right-leave-active,
.zk-popup-fade-right-start-enter,
.zk-popup-fade-right-start-leave-active,
.zk-popup-fade-right-start-leave,
.zk-popup-fade-right-start-leave-active,
.zk-popup-fade-right-end-enter,
.zk-popup-fade-right-end-leave-active,
.zk-popup-fade-right-end-leave,
.zk-popup-fade-right-end-leave-active {
  transform: translateX(100%)
}

.zk-popup-fade-bottom-enter,
.zk-popup-fade-bottom-leave-active,
.zk-popup-fade-bottom-leave,
.zk-popup-fade-bottom-leave-active,
.zk-popup-fade-bottom-start-enter,
.zk-popup-fade-bottom-start-leave-active,
.zk-popup-fade-bottom-start-leave,
.zk-popup-fade-bottom-start-leave-active,
.zk-popup-fade-bottom-end-enter,
.zk-popup-fade-bottom-end-leave-active,
.zk-popup-fade-bottom-end-leave,
.zk-popup-fade-bottom-end-leave-active {
  transform: translateY(100%)
}

.zk-popup-fade-left-enter,
.zk-popup-fade-left-leave-active,
.zk-popup-fade-left-leave,
.zk-popup-fade-left-leave-active,
.zk-popup-fade-left-start-enter,
.zk-popup-fade-left-start-leave-active,
.zk-popup-fade-left-start-leave,
.zk-popup-fade-left-start-leave-active,
.zk-popup-fade-left-end-enter,
.zk-popup-fade-left-end-leave-active,
.zk-popup-fade-left-end-leave,
.zk-popup-fade-left-end-leave-active {
  transform: translateX(-100%)
}
</style>
