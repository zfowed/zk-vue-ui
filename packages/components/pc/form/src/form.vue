<template>
  <div :class="['zk-form', { 'zk-form-inline': inline }]">
    <slot></slot>
  </div>
</template>

<script>
import { Form } from '../../../../mixins/components/form'
export default {
  name: 'ZkForm',
  mixins: [Form]
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
