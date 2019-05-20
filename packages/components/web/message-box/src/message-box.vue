<template>
  <zk-dialog
    :visible="visible"
    @update:visible="updateVisible"
    :title="title"
    width="440px"
    body-style="padding: 0"
    :customClass="customClass"
    :modal="modal"
    :closeOnClickModal="closeOnClickModal"
    :showClose="showClose"
    :beforeClose="beforeClose"
    @transitionend="handleTransitionend">
    <div :class="['dialog-container', { 'is-center': center }]">
      <slot>
        <div v-if="dangerouslyUseHTMLString" v-html="message"></div>
        <div v-else-if="message">{{ message }}</div>
      </slot>
    </div>
    <div class="dialog-footer">
      <button
        v-if="showCancelButton"
        :class="['dialog-footer-button', cancelButtonClass]"
        type="button"
        @click="onCancelButtonClick">
        <span>{{ cancelButtonText }}</span>
      </button>
      <button
        v-if="showConfirmButton"
        :class="['dialog-footer-button', confirmButtonClass]"
        type="button"
        @click="onConfirmButtonClick">
        <span>{{ confirmButtonText }}</span>
      </button>
    </div>
  </zk-dialog>
</template>

<script>
import Dialog from '../../dialog'

export default {
  name: 'ZkMessageBox',
  components: {
    'zk-dialog': Dialog
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
      default: '提示'
    },
    // MessageBox 消息正文内容
    message: {
      type: String
    },
    // 是否需要遮罩层
    modal: {
      type: Boolean,
      default: true
    },
    // 是否将 message 属性作为 HTML 片段处理
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    // Dialog 的自定义类名
    customClass: {
      type: String
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
    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: false
    },
    // 居中
    center: {
      type: Boolean,
      default: true
    },
    // 是否显示确定按钮
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    // 取消按钮的文本内容
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    // 确定按钮的文本内容
    confirmButtonText: {
      type: String,
      default: '确定'
    },
    // 取消按钮的自定义类名
    cancelButtonClass: {
      type: String,
      default: 'dialog-footer-cancel'
    },
    // 确定按钮的自定义类名
    confirmButtonClass: {
      type: String,
      default: 'dialog-footer-confirm'
    }
  },
  methods: {
    handleTransitionend (event) {
      this.$emit('transitionend', event)
    },
    updateVisible (visible) {
      this.$emit('update:visible', visible)
      if (!visible) this.$emit('close')
    },
    onConfirmButtonClick () {
      this.$emit('update:visible', false)
      this.$emit('confirm')
    },
    onCancelButtonClick () {
      this.$emit('update:visible', false)
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-container {
  padding: 64px 30px;
  box-sizing: border-box;
  font-size: 18px;
  color: #656565;
  &.is-center {
    text-align: center;
  }
}
.dialog-footer {
  text-align: center;
  padding: 0 30px 24px;
  .dialog-footer-button {
    width: 180px;
    height: 44px;
    box-sizing: border-box;
    display: inline-block;
    text-align: center;
    color: #656565;
    background: #fff;
    border: 1px solid #AAAAAA;
    margin-right: 9px;
    font-size: 18px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.dialog-footer-confirm {
      color: #FFFFFF;
      background-color: #0B7AFB;
      border: none;
    }
  }
}
</style>
