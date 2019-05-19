<template>
  <div id="app">
    <zk-form ref="form" :model="form" :rules="rules">
      <zk-form-item label="asdsa" prop="phone">
        <zk-input type="textarea" v-model="form.phone"></zk-input>
      </zk-form-item>
      <zk-form-item label="asdsa" prop="phone">
        <zk-input v-model="form.phone2"></zk-input>
      </zk-form-item>
    </zk-form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
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
