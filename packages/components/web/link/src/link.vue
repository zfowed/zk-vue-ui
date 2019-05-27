<template>
  <a
    :is="tag"
    :to="to"
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
    to: {},
    href: {
      type: String,
      default: ''
    }
  },
  computed: {
    tag () {
      if (this.href) {
        return 'a'
      } else if (this.to) {
        return 'router-link'
      }
      return 'span'
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
    color: #0B7AFB;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #0B7AFB;
    }
    &.not-underline {
      &::after {
        display: none;
      }
    }
  }
  &:active {
    color: #0061D1;
    &::after {
      border-bottom-color: #0061D1;
    }
  }
  & + .zk-link {
    margin-left: 8px;
  }

  &.zk-link--primary {
    color: #0B7AFB;
    &:hover {
      color: #0B7AFB;
      &::after {
        border-bottom-color: #0B7AFB;
      }
    }
    &:active {
      color: #0061D1;
      &::after {
        border-bottom-color: #0061D1;
      }
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
