<template>
  <div id="app">
    <div>asdasd</div>
    <zk-date-picker >
    </zk-date-picker>
    <zk-button border @click="layer = !layer">s</zk-button>
    <zk-button border @click="$toast('asd')">$toast</zk-button>
    <zk-button border @click="toast = !toast">toast</zk-button>
    <zk-button border @click="$message('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈')">$message</zk-button>
    <zk-link disabled>四十多岁的</zk-link>
    <zk-pagination :total="100"></zk-pagination>
    <zk-radio v-model="radio" label="123"></zk-radio>
    <zk-radio v-model="radio" label="1232"></zk-radio>
    <zk-checkbox v-model="checkbox" true-label="123">备选项</zk-checkbox>
    <zk-checkbox v-model="checkbox" true-label="1232">备选项</zk-checkbox>
    <zk-popup-layer :visible.sync="layer" placement="left">
      <div style="height: 100px; width: 100%; background: #fff; box-shadow: 0 0 5px #f55;">备选项</div>
    </zk-popup-layer>
    <zk-toast :visible.sync="toast">
      <div>asdas</div>
    </zk-toast>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      layer: false,
      toast: false,
      radio: '123',
      checkbox: '123',
      form: {
        phone: '',
        phone2: ''
      },
      rules: {
        phone: [{
          type: 'string',
          message: '手机号码不允许为空',
          required: true,
          whitespace: true
        }, {
          message: '请输入正确的手机号码',
          pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
        }]
      }
    }
  },
  methods: {
    handleSelectionChange () {
      console.log(arguments)
    }
  },
  mounted () {
    window.form = this.$refs.form
  }
}
</script>

<style lang="scss">
</style>
