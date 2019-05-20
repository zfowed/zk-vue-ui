<template>
  <div
    :class="['zk-steps-progress-item', {
      'is-complete': complete,
      'is-active': active,
      'is-error': error
    }]">
    <slot
      :label="label"
      :value="value"
      :index="index"
      :complete="complete"
      :active="active"
      :error="error">
      <span>{{ label }}</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ZkStepsItem',
  inject: {
    zkSteps: {
      default: undefined
    }
  },
  props: {
    value: { required: true },
    label: { type: String }
  },
  computed: {
    index () {
      return this.zkSteps.values.indexOf(this.value)
    },
    complete () {
      return this.index < this.zkSteps.currentIndex
    },
    active () {
      return this.index === this.zkSteps.currentIndex
    },
    error () {
      return this.index === this.zkSteps.currentIndex && this.zkSteps.error
    }
  },
  created () {
    this.zkSteps.updateValues()
  }
}
</script>

<style lang="scss" scoped>
.zk-steps-progress-item {
  height: 24px;
  line-height: 24px;
  align-items: center;
  flex-shrink: 1;
  flex-basis: 50%;
  text-align: center;
  border-radius: 24px;
  color: #656565;
  transition: color .2s;
  &.is-complete,
  &.is-active {
    color: #0B7AFB;
  }
  &.is-error {
    color: #656565;
  }
}
</style>
