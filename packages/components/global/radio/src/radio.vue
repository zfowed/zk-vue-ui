<template>
  <label
    :class="['zk-radio', {
      'is-active': currentChecked
    }]">
    <span class="zk-radio-inner">
      <input
        v-model="currentValue"
        class="radio-input"
        type="radio"
        :value="label"
        :disabled="currentDisabled"
        v-bind="$attrs" />
    </span>
    <span v-if="$slots.default" class="zk-radio-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import Radio from '../../../../mixins/components/radio'
export default {
  name: 'ZkRadio',
  mixins: [Radio]
}
</script>

<style lang="scss" scoped>
.zk-radio {
  display: inline-block;
  white-space: nowrap;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
}
.zk-radio-inner {
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 1;
  border: 1px solid #AAAAAA;
  vertical-align: middle;
  cursor: pointer;
  transition: all .2s;
  user-select: none;
  box-sizing: border-box;
  border-radius: 50%;
  .radio-input {
    display: none;
  }
}
.zk-radio-label {
  display: inline-block;
  padding-left: 10px;
  height: 16px;
  font-size: 14px;
  color: #656565;
  white-space: nowrap;
  line-height: 1;
  position: relative;
  top: 1px;
}
.is-active .zk-radio-inner {
  border: 5px solid #2D76ED;
}
</style>
