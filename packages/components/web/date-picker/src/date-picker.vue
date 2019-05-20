<template>
  <el-date-picker
    class="zk-date-picker"
    v-model="currentValue"
    :placeholder="placeholder"
    :value-format="valueFormat"
    :disabled="currentDisabled"
    v-bind="$attrs"
    @change="emit.bind(this, 'change')"
    @blur="emit.bind(this, 'blur')"
    @focus="emit.bind(this, 'focus')">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-date-picker>
</template>

<script>
import { FormItemSlot } from '../../../../mixins/components/form'
import DatePicker from 'element-ui/lib/date-picker'

export default {
  name: 'ZkDatePicker',
  mixins: [FormItemSlot],
  components: {
    'el-date-picker': DatePicker
  },
  props: {
    valueFormat: {
      default: 'timestamp'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  watch: {
    currentValue () {
      this.$emit('change', this.currentValue)
    }
  },
  methods: {
    emit (event, ...args) {
      this.$emit(event, ...args)
      if (event === 'focus') this.handleFormFocus()
      if (event === 'blur') this.handleFormBlur()
    }
  }
}
</script>

<style lang="scss">
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import "~element-ui/packages/theme-chalk/src/icon";
@import "~element-ui/packages/theme-chalk/src/date-picker";
.zk-date-picker.el-date-editor {
  /deep/ {
    .el-input__inner {
      border-radius: 0;
      border-color: #EAEAEA;
      &::placeholder {
        color: #AAAAAA;
      }
      &:focus {
        outline: none;
        border-color: #0B7AFB;
      }
    }
  }
}
</style>
