<template>
  <label
    :class="['zk-radio', {
      'is-active': currentChecked
    }]">
    <input
      v-model="currentValue"
      class="radio-input"
      type="radio"
      :value="label"
      :disabled="currentDisabled"
      v-bind="$attrs" />
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
  .radio-input {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
}
.is-active {
  border-color: #2D76ED;
  background: #2D76ED url('../assets/s.png') no-repeat center center;
  background-size: 11px 8px;
}
</style>
