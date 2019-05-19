<template>
  <span>
    <div v-transfer-dom class="zk-popup">
      <transition name="zk-popup-fade">
        <div
          v-if="currentVisible && modal"
          class="zk-popup-mask"
          :style="{ 'z-index': zIndex }"
          @click="onClickModal">
        </div>
      </transition>
      <transition name="zk-popup-fade">
        <div
          v-if="currentVisible"
          :class="['zk-popup-slot', { [`zk-popup-slot--${placement}`]: placement }]"
          :style="{ 'z-index': zIndex }">
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
    onClickModal () {
      if (this.closeOnClickModal) {
        this.currentVisible = false
      }
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
    transition: opacity .2s;
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
    &-start { right: auto; }
    &-end { left: auto; }
  }
  .zk-popup-slot--bottom {
    bottom: 0;
    left: 0;
    right: 0;
    &-start { right: auto; }
    &-end { left: auto; }
  }
  .zk-popup-slot--left {
    left: 0;
    top: 0;
    bottom: 0;
    &-start { bottom: auto; }
    &-end { top: auto; }
  }
  .zk-popup-slot--right {
    right: 0;
    top: 0;
    bottom: 0;
    &-start { bottom: auto; }
    &-end { top: auto; }
  }
}
.zk-popup-fade-enter,
.zk-popup-fade-leave-active {
  opacity: 0 !important;
}
</style>
