<template>
  <zk-popup-layer
    :visible="visible"
    :modal="false"
    :append-to-body="appendToBody"
    @transitionend="handleTransitionend">
    <div
      :class="['zk-message', `zk-message-${type}`]">
      <div class="zk-message-box">
        <div class="zk-message-icon"></div>
        <div v-if="dangerouslyUseHTMLString" v-html="message" class="zk-message-text"></div>
        <div v-else class="zk-message-text">{{ message }}</div>
      </div>
    </div>
  </zk-popup-layer>
</template>

<script>
import PopupLayer from '../../../global/popup-layer'

export default {
  name: 'ZkMessage',
  components: {
    'zk-popup-layer': PopupLayer
  },
  props: {
    // 是否显示 Message，支持 .sync 修饰符
    visible: {
      type: Boolean,
      default: false
    },
    // 消息正文内容
    message: {
      type: String
    },
    // 主题 success/warning/error
    type: {
      type: String,
      default: 'success'
    },
    // 是否将 message 属性作为 HTML 片段处理
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    },
    // 是否插入到 body
    appendToBody: {
      type: Boolean,
      default: true
    },
    // Message 的自定义类名
    customClass: {
      type: String
    }
  },
  methods: {
    handleTransitionend (event) {
      this.$emit('transitionend', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-message {
  min-width: 286px;
  min-height: 86px;
  padding: 31px 24px;
  box-sizing: border-box;
  border-radius: 4px;
  .zk-message-box {
    text-align: center;
    white-space: nowrap;
  }
  .zk-message-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  .zk-message-text {
    display: inline-block;
    min-height: 24px;
    vertical-align: middle;
    color: #656565;
    font-size: 18px;
    padding-left: 8px;
    line-height: 24px;
  }
  &.zk-message-success {
    background: #F0F9EB;
    .zk-message-icon {
      background: url('~../assets/success.png') no-repeat top left;
      background-size: 24px 24px;
      box-sizing: 80px;
    }
  }
  &.zk-message-warning {
    background: #ffe7c8;
    .zk-message-icon {
      background: url('~../assets/warning.png') no-repeat top left;
      background-size: 24px 24px;
      box-sizing: 80px;
    }
  }
  &.zk-message-error {
    background: #ffe6e1;
    .zk-message-icon {
      background: url('~../assets/error.png') no-repeat top left;
      background-size: 24px 24px;
      box-sizing: 80px;
    }
  }
}
</style>
