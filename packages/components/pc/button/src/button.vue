<template>
  <button
    :class="[
      'zk-button',
      {
        'is-disabled': currentDisabled,
        'is-border': border,
        [`zk-button--${type}`]: type,
      }
    ]"
    :disabled="currentDisabled"
    v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
import { FormItemSlot } from '../../../../mixins/components/form'

export default {
  name: 'ZkButton',
  mixins: [FormItemSlot],
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-button {
  width: 100px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  user-select: none;
  // padding: 13px 13px;
  font-size: 14px;
  color: #656565;
  height: 40px;
  background: #FFFFFF;
  border: solid 1px #AAAAAA;
  & + .zk-button {
    margin-left: 8px;
  }
  &:hover {
    color: #FFFFFF;
    border-color: #1E86FF;
    background: #1E86FF;
  }
  &:active {
    color: #FFFFFF;
    border-color: #0061D1;
    background: #0061D1;
  }
  &.zk-button--primary {
    color: #FFFFFF;
    border-color: #0B7AFB;
    background: #0B7AFB;
    &.is-border {
      background: none;
      color: #0B7AFB;
      border-color: #0B7AFB;
    }
    &:hover {
      color: #FFFFFF;
      border-color: #1E86FF;
      background: #1E86FF;
    }
    &:active {
      color: #FFFFFF;
      border-color: #0061D1;
      background: #0061D1;
    }
  }
  &[disabled],
  &.is-disabled {
    cursor: not-allowed;
    color: #FFFFFF;
    border-color: #656565;
    background: #656565;
    &:hover {
      color: #FFFFFF;
      border-color: #656565;
      background: #656565;
    }
    &:active {
      color: #FFFFFF;
      border-color: #656565;
      background: #656565;
    }
  }
}
</style>
