<template>
  <label
    :class="['zk-checkbox', {
      'is-checked': currentChecked
    }]">
    <span class="zk-checkbox-inner">
      <input
        v-model="currentChecked"
        class="zk-checkbox-input"
        type="checkbox"
        :disabled="currentDisabled"
        v-bind="$attrs" />
    </span>
    <span v-if="$slots.default" class="zk-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import Checkbox from '../../../../mixins/components/checkbox'
export default {
  name: 'ZkCheckbox',
  mixins: [Checkbox]
}
</script>

<style lang="scss" scoped>
.zk-checkbox {
  display: inline-block;
  white-space: nowrap;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
}
.zk-checkbox-inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background-color: #fff;
  // z-index: 1;
  cursor: pointer;
  vertical-align: middle;
  transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  .zk-checkbox-input {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
}
.zk-checkbox-label {
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
.is-checked .zk-checkbox-inner {
  border-color: #2D76ED;
  background: #2D76ED url('../assets/s.png') no-repeat center center;
  background-size: 11px 8px;
}
</style>
