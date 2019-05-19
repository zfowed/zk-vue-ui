<template>
  <a
    :href="href"
    :class="['zk-link', {
      'is-disabled': currentDisabled,
      'not-underline': !underline,
      [`zk-link--${type}`]: type,
    }]"
    :disabled="currentDisabled"
    v-on="$listeners"
    v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
import { FormItemSlot } from '../../../../mixins/components/form'

export default {
  name: 'ZkLink',
  mixins: [FormItemSlot],
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    underline: {
      type: Boolean,
      default: true
    },
    href: {
      type: String,
      default: 'javascript:;'
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-link {
  position: relative;
  color: #0B7AFB;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #1E86FF;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #409eff;
    }
    &.not-underline {
      &::after {
        display: none;
      }
    }
  }
  &:active {
    color: #0061D1;
  }
  & + .zk-link {
    margin-left: 8px;
  }

  &.zk-link--primary {
    color: #0B7AFB;
    &::after {
      border-color: #1E86FF;
    }
    &:hover {
      color: #1E86FF;
    }
    &:active {
      color: #0061D1;
    }
    &.is-disabled {
      color: #0B7AFB;
    }
  }
  &[disabled],
  &.is-disabled {
    opacity: .5;
    cursor: not-allowed;
    &::after {
      display: none;
    }
  }
}
</style>
