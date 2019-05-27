<template>
  <div class="zk-select">
    <zk-popover
      class="zk-popover"
      block
      v-model="visible"
      placement="bottom-start"
      :disabled="currentDisabled">
      <zk-input
        ref="input"
        slot="reference"
        class="zk-select-input"
        readonly
        :value="label"
        :disabled-form-validate="true"
        :placeholder="placeholder"
        :disabled="currentDisabled"
        v-bind="$attrs">
        <img :class="['zk-select-icon', { 'is-reverse': visible }]" slot="suffix-icon" src="../assets/icon.png">
      </zk-input>
      <div class="zk-select-ul" :style="{ 'min-width': `${currentWidth}px` }">
        <slot></slot>
      </div>
    </zk-popover>
  </div>
</template>

<script>
import { Select } from '../../../../mixins/components/select'

import Popover from '../../../global/popover'
import Input from '../../input'
export default {
  name: 'ZkSelect',
  components: {
    'zk-popover': Popover,
    'zk-input': Input
  },
  mixins: [Select],
  data () {
    return {
      currentWidth: 200
    }
  },
  watch: {
    visible () {
      if (!this.visible) return
      this.handlePopoverUpdate()
    }
  },
  methods: {
    handlePopoverUpdate () {
      this.currentWidth = this.$refs.input.$el.clientWidth
    }
  },
  mounted () {
    this.handlePopoverUpdate()
  }
}
</script>

<style lang="scss" scoped>
.zk-select {
  width: 100%;
  display: inline-block;
}
.zk-select-input {
  cursor: pointer;
  /deep/ input {
    cursor: pointer;
  }
}
.zk-select-ul {
  padding: 6px 0;
  margin: 0;
  background-color: #FFFFFF;
  list-style: none;
  box-shadow: 1px 2px 7px 0px rgba(101,101,101,0.2);
  width: 100%;
  max-height: 184px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #FFFFFF;
    &-track-piece {
      background: #FFFFFF;
    }
    &-thumb {
      background-color: rgba(144, 146, 152, 0.3);
      border-radius: 3px;
      &:hover {
        background-color: rgba(144, 146, 152, 0.5);
      }
    }
  }
}
.zk-select-icon {
  transition: transform .3s;
  &.is-reverse {
    transform: rotate(180deg);
  }
}
</style>
