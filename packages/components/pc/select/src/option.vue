<template>
  <div
    :class="['zk-option', {
      'is-selected': isSelected
    }]"
    @click="handleClick">
    <span>{{ currentLabel }}</span>
  </div>
</template>

<script>
import { Option } from '../../../../mixins/components/select'

export default {
  name: 'ZkOption',
  mixins: [Option]
}
</script>
<style lang="scss" scoped>
.zk-option {
  color: #656565;
  font-size: 14px;
  padding: 10px 18px;
  transition: background-color .2s;
  line-height: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #F3F9FF;
  }
  &.is-selected {
    color: #FFFFFF;
    background-color: #0B7AFB;
  }
}
</style>
