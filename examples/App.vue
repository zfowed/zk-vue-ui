<template>
  <div id="app">
    <zk-table>
      <zk-table-head>
        <zk-table-tr>
          <zk-table-th>日期</zk-table-th>
          <zk-table-th>姓名</zk-table-th>
          <zk-table-th>地址</zk-table-th>
        </zk-table-tr>
        </zk-table-head>
      <zk-table-body>
        <zk-table-tr v-for="i in 3" :key="i">
          <zk-table-td>2019-05-08</zk-table-td>
          <zk-table-td>
            <zk-popover trigger="focus">
              <span slot="reference">不瞭望的怪人</span>
              <zk-input>
                <img slot="prefix-icon" src="http://www.zfowed.com/static/img/avatar.jpg" alt="" srcset="">
                <img slot="suffix-icon" src="http://www.zfowed.com/static/img/avatar.jpg" alt="" srcset="">
              </zk-input>
            </zk-popover>
          </zk-table-td>
          <zk-table-td>你猜不到~猜不到~</zk-table-td>
        </zk-table-tr>
      </zk-table-body>
    </zk-table>
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
