<template>
  <div
    :class="['zk-input', {
      'el-input--prefix': type !== 'textarea' && $slots['prefix-icon'],
      'el-input--suffix': type !== 'textarea' && $slots['suffix-icon'],
      'is-disabled': disabled
    }]">
    <template v-if="type !== 'textarea'">
      <span v-if="$slots['prefix-icon']" class="zk-input__prefix-icon">
        <slot name="prefix-icon"></slot>
      </span>
      <input
        ref="input"
        class="zk-input__inner"
        v-bind="$attrs"
        :type="type"
        :disabled="currentDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :value="currentValue"
        :aria-label="label"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange">
      <span v-if="$slots['suffix-icon']" class="zk-input__suffix-icon">
        <slot name="suffix-icon"></slot>
      </span>
    </template>
    <textarea
      v-else
      ref="textarea"
      class="zk-textarea__inner"
      v-bind="$attrs"
      :value="currentValue"
      :disabled="currentDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :style="textareaStyle"
      :aria-label="label"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange">
    </textarea>
  </div>
</template>

<script>
import Input from '../../../../mixins/components/input'
export default {
  name: 'ZkInput',
  mixins: [Input]
}
</script>

<style lang="scss" scoped>
.zk-input {
  position: relative;
  display: inline-block;
  width: 100%;
  .zk-input__prefix-icon,
  .zk-input__suffix-icon {
    position: absolute;
    top: 0;
    z-index: 2;
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    img {
      max-width: 80%;
      max-height: 80%;
      margin: auto;
    }
  }
  .zk-input__prefix-icon {
    left: 0;
  }
  .zk-input__suffix-icon {
    right: 0;
  }
  .zk-input__inner,
  .zk-textarea__inner {
    position: relative;
    z-index: 1;
    width: 100%;
    display: block;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 16px;
    color: #656565;
    box-sizing: border-box;
    border: solid 1px #EAEAEA;
    transition: all .2s;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
    &::placeholder {
      color: #AAAAAA;
    }
    &:focus {
      outline: none;
      border-color: #0B7AFB;
    }
    &.is-block {
      width: 100%;
      display: block;
    }
    &.is-validate-error {
      outline: #FF5A00;
    }
    &[disabled],
    &.is-disabled {
      cursor: not-allowed;
      background: #f5f7fa;
    }
  }
  .zk-input__inner {
    height: 40px;
  }
}
.el-input--prefix {
  .zk-input__inner {
    padding-left: 40px;
  }
}
.el-input--suffix {
  .zk-input__inner {
    padding-right: 40px;
  }
}
</style>
