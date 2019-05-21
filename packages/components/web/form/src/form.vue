<template>
  <div class="zk-form">
    <slot></slot>
  </div>
</template>

<script>
import { Form } from '../../../../mixins/components/form'
export default {
  name: 'ZkForm',
  mixins: [Form],
  provide () {
    return {
      zkForm: this
    }
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    errorPosition: {
      type: String,
      default: 'button'
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    labelWidth: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-form.zk-form-inline {
  /deep/ {
    .zk-form-item {
      margin-right: 38px;
      &:last-child {
        margin-right: 0;
      }
    }
    .zk-form-item,
    .zk-form-item-label,
    .zk-form-item-content {
      display: inline-block;
      * {
        vertical-align: middle;
      }
    }
    .zk-form-item-error {
      display: none;
    }
    .zk-input {
      width: 244px;
    }
  }
}
</style>
