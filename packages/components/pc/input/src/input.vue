<template>
  <div :class="['zk-input', { 'is-disabled': disabled }]">
    <input
      v-if="type !== 'textarea'"
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
  display: inline-block;
  width: 100%;
  .zk-input__inner,
  .zk-textarea__inner {
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
</style>
