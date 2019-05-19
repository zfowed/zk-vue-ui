<template>
  <zk-popup-layer :visible="visible" :modal="false" :append-to-body="false" @transitionend="handleTransitionend">
    <div class="zk-toast">
      <span class="zk-toast-text">{{ message }}</span>
    </div>
  </zk-popup-layer>
</template>

<script>
import PopupLayer from '../../popup-layer'

export default {
  name: 'Toast',
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
.zk-toast {
  // max-width: 80%;
  border-radius: 5px;
  background: rgba(0,0,0,.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  // transition: opacity .3s linear;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 10px;
  .zk-toast-text {
    font-size: 14px;
    display: block;
    text-align: center;
  }
}
</style>
