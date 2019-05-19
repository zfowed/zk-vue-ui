<template>
  <zk-popup-layer
    :placement="placement"
    :prop-up="true"
    :modal="false"
    :append-to-body="false"
    :visible="visible"
    @transitionend="handleTransitionend">
    <div :class="['zk-toast', `zk-toast-${placement}`, toastClass]" :style="toastStyle">
      <span class="zk-toast-text">{{ message }}</span>
    </div>
  </zk-popup-layer>
</template>

<script>
import PopupLayer from '../../popup-layer'

export default {
  name: 'ZkToast',
  components: {
    'zk-popup-layer': PopupLayer
  },
  props: {
    message: {
      type: String,
      default: '这是一条信息'
    },
    visible: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'center'
    },
    toastClass: {},
    toastStyle: {}
  },
  methods: {
    handleTransitionend (event) {
      this.$emit('transitionend', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-toast {
  border-radius: 5px;
  background: rgba(0,0,0,.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  padding: 10px;
  min-width: 120px;
  margin: 20px;
  .zk-toast-text {
    font-size: 14px;
    display: block;
    text-align: center;
  }
}
</style>
