<template>
  <div class="zk-form">
    <slot></slot>
  </div>
</template>

<script>
import { Form } from '../../../../mixins/components/form'

export default {
  name: 'ZkForm',
  mixins: [Form],
  provide () {
    return {
      zkForm: this
    }
  },
  props: {
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
  }
}
</script>

<style lang="scss" scoped>
</style>
