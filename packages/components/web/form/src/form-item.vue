<template>
  <div
    :class="['zk-form-item', {
      ['zk-form-item--nesting']: isNesting,
      ['zk-form-item--inline']: currentInline,
      ['zk-form-item--error-hide']: !currentShowMessage,
      [`zk-form-item--error-inline`]: currentInlineMessage,
      [`zk-form-item--label-${currentLabelPosition}`]: currentLabelPosition,
      ['is-error']: isError
    }]">
    <label
      v-if="!isNesting && label"
      class="zk-form-item__label"
      :style="!currentInline && !isNesting && currentLabelPosition !== 'top' && labelStyle">
      <span class="zk-form--item__required-star" v-if="currentRequired">*</span>
      <span>{{ label }}</span>
    </label>
    <div
      class="zk-form-item__content"
      :style="!currentInline && !isNesting && currentLabelPosition !== 'top' && contentStyle">
      <slot :validate="validate" :clearValidate="clearValidate"></slot>
      <div
        v-if="!currentInline && currentShowMessage && isError"
        class="zk-form-item__error">
        <span>{{ validateMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { FormItem } from '../../../../mixins/components/form'

export default {
  name: 'ZkFormItem',
  mixins: [FormItem],
  inject: {
    zkForm: {
      default: undefined
    },
    zkFormItem: {
      default: undefined
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: undefined
    },
    labelPosition: {
      type: String,
      default: undefined
    },
    inlineMessage: {
      type: Boolean,
      default: undefined
    },
    showMessage: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    isNesting () {
      return !!this.zkFormItem
    },
    currentInline () {
      return this.inline || (this.zkForm && this.zkForm.inline)
    },
    currentShowMessage () {
      if (typeof this.showMessage !== 'undefined') return this.showMessage
      if (this.zkForm && typeof this.zkForm.showMessage !== 'undefined') return this.zkForm.showMessage
      return true
    },
    currentInlineMessage () {
      return this.inlineMessage || (this.zkForm && this.zkForm.inlineMessage)
    },
    currentLabelWidth () {
      return this.labelWidth || (this.zkForm && this.zkForm.labelWidth)
    },
    currentLabelPosition () {
      return this.labelPosition || (this.zkForm && this.zkForm.labelPosition)
    },
    currentErrorWidth () {
      return this.currentInlineMessage && this.currentLabelWidth
    },
    labelStyle () {
      return { width: this.currentLabelWidth }
    },
    contentStyle () {
      return {
        'margin-left': this.currentLabelWidth,
        'margin-right': this.currentErrorWidth
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-form-item {
  margin-bottom: 22px;
  clear: both;
  &:last-child {
    margin-bottom: 0;
  }
  &::after,
  &::before {
    display: table;
    content: "";
  }
  .zk-form-item__label {
    float: left;
  }
  .zk-form-item {
    margin-bottom: 0;
  }
}
.zk-form-item__label,
.zk-form-item__content {
  display: block;
  position: relative;
  line-height: 40px;
  font-size: 14px;
}
.zk-form-item__label {
  vertical-align: middle;
  font-size: 14px;
  line-height: 40px;
  color: #606266;
  box-sizing: border-box;
  padding: 0 12px 0 0;
}
.zk-form-item__content {
  &::after,
  &::before {
    display: table;
    content: "";
  }
}
.zk-form-item__error {
  color: #FF5A00;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  left: 0;
}
.zk-form--item__required-star {
  color: #FF5A00;
}

.zk-form-item--label-right {
  .zk-form-item__label {
    text-align: right;
  }
}
.zk-form-item--label-top {
  .zk-form-item__label {
    float: none;
    width: 100%;
    line-height: 2;
  }
  .zk-form-item__content {
    margin-left: 0;
  }
}

.zk-form-item--error-inline {
  .zk-form-item__error {
    top: 0;
    left: 100%;
    padding: 0;
    padding-left: 12px;
    line-height: 40px;
    white-space: nowrap;
  }
}

.zk-form-item--inline {
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  .zk-form-item__label,
  .zk-form-item__content {
    display: inline-block;
  }

  &.zk-form-item--error-inline {
    .zk-form-item__error {
      display: none;
    }
  }
  /deep/ {
    .zk-select,
    .zk-input {
      width: 180px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.is-error {
  .zk-form-item__label {
    color: #FF5733;
  }
  /deep/ {
    .zk-select,
    .zk-input {
      .zk-input__inner {
        border-color: #FF5733;
      }
    }
  }
}
</style>
