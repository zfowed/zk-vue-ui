<template>
  <zk-popup-layer
    :visible.sync="currentVisible"
    :modal="modal"
    :close-on-click-modal="closeOnClickModal"
    @transitionend="handleTransitionend">
    <div :class="['zk-dialog', { 'is-scrollbar': scrollbar }, customClass]" :style="{ width }">
      <div class="zk-dialog-title">
        <div class="zk-dialog-title-text">
          <slot name="title">{{ title }}</slot>
        </div>
        <div v-if="showClose" class="zk-dialog-title-close" @click="handleClickClose">
          <span class="zk-dialog-title-close-icon"></span>
        </div>
      </div>
      <div class="zk-dialog-slot" :style="bodyStyle">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="zk-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </zk-popup-layer>
</template>

<script>
import PopupLayer from '../../../global/popup-layer'

export default {
  name: 'ZkDialog',
  components: {
    'zk-popup-layer': PopupLayer
  },
  props: {
    // 是否显示 Dialog，支持 .sync 修饰符
    visible: {
      type: Boolean,
      default: false
    },
    // Dialog 的标题，也可通过具名 slot
    title: {
      type: String,
      default: '标题'
    },
    // Dialog 的宽度
    width: {
      type: String,
      default: '660px'
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: true
    },
    // Dialog 的自定义类名
    customClass: {
      type: String
    },
    // 滚动条模式
    scrollbar: {
      type: Boolean,
      default: true
    },
    // 是否可以通过点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    },
    // 关闭前的回调，会暂停 Dialog 的关闭
    beforeClose: {
      type: Function
    },
    bodyStyle: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    currentVisible: {
      get () {
        return this.visible
      },
      set (visible) {
        if (!visible && this.beforeClose) {
          return this.beforeClose(() => this.$emit('update:visible', false))
        }
        this.$emit('update:visible', visible)
      }
    }
  },
  watch: {
    currentVisible: {
      immediate: true,
      handler () {
        if (this.currentVisible) {
          document.querySelector('body').classList.add('zk-dialog--hidden')
        } else {
          document.querySelector('body').classList.remove('zk-dialog--hidden')
        }
      }
    }
  },
  methods: {
    handleTransitionend (event) {
      this.$emit('transitionend', event)
    },
    handleClickClose () {
      this.currentVisible = false
    }
  }
}
</script>

<style>
body.zk-dialog--hidden {
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.zk-dialog {
  width: 660px;
  max-height: 100vh;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  &-title {
    position: relative;
    z-index: 1;
    padding: 12px 37px;
    text-align: center;
    background-color: #0B7AFB;
    flex-grow: 1;
    &-text {
      font-size: 16px;
      color: #FFFFFF;
    }
    &-close {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 21px;
      z-index: 1;
      width: 28px;
      height: 28px;
      margin: auto 0;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      &-icon {
        display: block;
        padding: 6px;
        width: 16px;
        height: 16px;
        display: block;
        background: url('~../assets/2.png') no-repeat center;
      }
      &:hover {
        background: #FFFFFF;
        .zk-dialog-title-close-icon {
          background-image: url('~../assets/1.png');
        }
      }
    }
  }
  &-slot {
    padding: 26px 25px 26px;
    color: #656565;
  }
  &-footer {
    flex-grow: 1;
    text-align: center;
    padding: 16px 0 36px;
  }
  &.is-scrollbar {
    max-height: 70vh;
    overflow: auto;
    .zk-dialog-slot {
      overflow: auto;
    }
  }
}
</style>
