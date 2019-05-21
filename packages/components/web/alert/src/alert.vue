<template>
  <div
    :class="['zk-alert', {
      [`zk-alert--${type}`]: type
    }]">
    <div class="zk-alert__icon">
      <img class="zk-alert__img" v-if="type ==='success'" src="../assets/success.png">
      <img class="zk-alert__img" v-else-if="type ==='error'" src="../assets/error.png">
      <img class="zk-alert__img" v-else src="../assets/warning.png">
    </div>
    <div class="zk-alert__content">
      <slot>asdad</slot>
    </div>
    <div v-if="closable" class="zk-alert__closebtn">
      <span v-if="closeText" @click="$emit('close')">{{ closeText }}</span>
      <img class="zk-alert__img" v-else src="../assets/c.png" @click="$emit('close')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZkAlert',
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'warning' // success/warning/error
    },
    description: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    closeText: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-alert {
  position: relative;
  display: table;
  width: 100%;
  color: #656565;
  font-size: 14px;
  line-height: 1.2;
  .zk-alert__closebtn,
  .zk-alert__icon {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 1px;
    white-space: nowrap;
    .zk-alert__img {
      display: block;
      width: 16px;
      height: 16px;
    }
  }
  .zk-alert__closebtn {
    padding-right: 16px;
  }
  .zk-alert__icon {
    padding-left: 16px;
  }
  .zk-alert__closebtn {
    img, span {
      cursor: pointer;
    }
  }
  .zk-alert__content {
    display: table-cell;
    padding: 12px 16px;
  }

  &.zk-alert--success {
    background: #F0F9EB;
  }
  &.zk-alert--warning {
    background: #ffe7c8;
  }
  &.zk-alert--error {
    background: #ffe6e1;
  }
}
</style>
