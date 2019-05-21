<template>
  <div :class="['zk-form-item', {
    [`zk-form-item--label-${labelPosition}`]: !zkFormItem && labelPosition,
    [`zk-form-item--error-${errorPosition}`]: !zkFormItem && errorPosition,
    [`zk-form-item--inline`]: inline
  }]">
    <div class="zk-form-item-label" :style="labelStyle">
      <span v-if="label">{{ label }}：</span>
    </div>
    <div class="zk-form-item-container" :style="containerStyle">
      <div class="zk-form-item-content">
        <slot :validate="validate" :clear-validate="clearValidate"></slot>
      </div>
      <div v-if="validateState === 'error'" class="zk-form-item-error">
        <span>*{{ validateMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { FormItem } from '../../../../mixins/components/form'

export default {
  name: 'ZkFormItem',
  mixins: [FormItem],
  props: {
    labelWidth: {
      type: String,
      default: ''
    }
  },
  inject: {
    zkForm: {
      default: undefined
    },
    zkFormItem: {
      default: undefined
    }
  },
  computed: {
    errorPosition () {
      return this.zkForm && this.zkForm.errorPosition
    },
    labelPosition () {
      return this.zkForm && this.zkForm.labelPosition
    },
    currentLabelWidth () {
      return this.labelWidth || (this.zkForm && this.zkForm.labelWidth)
    },
    inline () {
      return this.zkForm && this.zkForm.inline
    },
    labelStyle () {
      const condition = !this.zkFormItem && (this.errorPosition === 'left' || this.errorPosition === 'right')
      if (!condition) return
      return {
        width: this.currentLabelWidth
      }
    },
    containerStyle () {
      const condition = !this.zkFormItem && this.errorPosition === 'right'
      if (!condition) return
      return {
        'margin-right': this.currentLabelWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-form-item {
  font-size: 14px;
  line-height: 28px;
  color: #656565;
  width: 100%;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  .zk-form-item-label {
    color: #656565;
  }
  .zk-form-item-container {
    position: relative;
  }
  .zk-form-item-content {
    width: 100%;
    min-height: 40px;
  }
  .zk-form-item-error {
    color: #FF5A00;
    padding-left: 16px;
    font-size: 12px;
    line-height: 16px;
    min-height: 16px;
  }
  &.zk-form-item--label-left,
  &.zk-form-item--label-right {
    display: table;
    table-layout: fixed;
    .zk-form-item-label {
      display: table-cell;
      padding: 0;
      vertical-align: top;
      line-height: 40px;
    }
    .zk-form-item-content {
      line-height: 40px;
    }
  }
  &.zk-form-item--label-right {
    .zk-form-item-label {
      text-align: right;
    }
  }
  &.zk-form-item--error-right {
    > .zk-form-item-container > .zk-form-item-error {
      position: absolute;
      left: 100%;
      top: 0;
      white-space: nowrap;
      line-height: 40px;
    }
  }
  &.zk-form-item--inline {
    display: inline-block;
    width: auto;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    .zk-form-item-label,
    .zk-form-item-container,
    .zk-form-item-content {
      display: inline-block;
      line-height: 40px;
      width: auto;
      vertical-align: bottom;
    }
    .zk-form-item-error {
      display: none;
    }
  }
}
</style>
