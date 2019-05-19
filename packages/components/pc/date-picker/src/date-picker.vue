<template>
  <el-date-picker
    v-model="currentValue"
    :placeholder="placeholder"
    :value-format="valueFormat"
    v-bind="$attrs"
    @change="emit.bind(this, 'change')"
    @blur="emit.bind(this, 'blur')"
    @focus="emit.bind(this, 'focus')">
    <slot v-for="($slot, key) in $slots" :slot="key" :name="key"></slot>
  </el-date-picker>
</template>

<script>
import emitter from '../../../../mixins/emitter'
import DatePicker from 'element-ui/lib/date-picker'

export default {
  name: 'ZkDatePicker',
  mixins: [emitter],
  components: {
    'el-date-picker': DatePicker
  },
  props: {
    value: {},
    valueFormat: {
      default: 'timestamp'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data () {
    return {
      currentValue: this.value,
    }
  },
  watch: {
    value () {
      this.currentValue = this.value
    },
    currentValue () {
      this.$emit('input', this.currentValue)
      return this.dispatch('ZkFormItem', 'zk.form.change', [this.currentValue])
    }
  },
  methods: {
    emit (event, ...args) {
      this.$emit(event, ...args)
    }
  }
}
</script>

<style lang="scss">
$--font-path: '~element-ui/lib/theme-chalk/fonts';
@import "~element-ui/packages/theme-chalk/src/icon";
@import "~element-ui/packages/theme-chalk/src/date-picker";
.el-date-editor {
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
</style>
