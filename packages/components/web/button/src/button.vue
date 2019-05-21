<template>
  <button
    :class="[
      'zk-button',
      {
        'is-disabled': currentDisabled,
        'is-plain': plain,
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
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-button {
  min-width: 100px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 12px 16px;
  transition: .1s;
  font-weight: 500;
  user-select: none;
  font-size: 14px;
  height: 40px;
  color: #656565;
  border: solid 1px #EAEAEA;
  background: #FFFFFF;
  & + .zk-button {
    margin-left: 8px;
  }
  &:hover {
    color: #656565;
    border-color: #AAAAAA;
    background: #FFFFFF;
  }
  &:active {
    color: #656565;
    border-color: #656565;
    background: #FFFFFF;
  }

  &.zk-button--primary {
    color: #FFFFFF;
    border-color: #0B7AFB;
    background: #0B7AFB;
    &.is-plain {
      color: #0B7AFB;
      border-color: #0B7AFB;
      background: #FFFFFF;
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
  &.is-disabled {
    cursor: not-allowed;
    color: #FFFFFF !important;
    border-color: #656565 !important;
    background: #656565 !important;
  }

}
</style>
