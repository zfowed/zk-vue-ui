<template>
  <div class="zk-form-item">
    <div class="zk-form-item-label">
      <span v-if="label">{{ label }}：</span>
    </div>
    <div class="zk-form-item-content">
      <slot :validate="validate" :clear-validate="clearValidate"></slot>
    </div>
    <div class="zk-form-item-error">
      <span v-if="validateState === 'error'">*{{ validateMessage }}</span>
    </div>
  </div>
</template>

<script>
import { FormItem } from '../../../../mixins/components/form'

export default {
  name: 'ZkFormItem',
  mixins: [FormItem]
}
</script>

<style lang="scss" scoped>
.zk-form-item {
  font-size: 14px;
  line-height: 28px;
  color: #656565;
  .zk-form-item-label {
    color: #656565;
  }
  .zk-form-item-error {
    color: #FF5A00;
    padding-left: 16px;
    font-size: 12px;
    line-height: 15px;
    min-height: 15px;
  }
}
</style>
