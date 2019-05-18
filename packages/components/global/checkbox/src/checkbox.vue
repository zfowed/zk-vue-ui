<template>
  <label
    :class="['zk-checkbox', {
      'is-checked': currentChecked
    }]">
    <input
      v-model="currentChecked"
      class="checkbox-input"
      type="checkbox" />
  </label>
</template>

<script>
import checkbox from '../../../../mixins/components/checkbox'
export default {
  name: 'ZkCheckbox',
  componentName: 'ZkCheckbox',
  mixins: [checkbox]
}
</script>

<style lang="scss" scoped>
.zk-checkbox {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background-color: #fff;
  z-index: 1;
  cursor: pointer;
  transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  .checkbox-input {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
}
.is-checked {
  border-color: #2D76ED;
  background: #2D76ED url('../assets/s.png') no-repeat center center;
  background-size: 11px 8px;
}
</style>
