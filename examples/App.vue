<template>
  <div id="app">
    <zk-table stripe border selection>
      <zk-table-head>
        <zk-table-tr>
          <zk-table-th selection-all></zk-table-th>
          <zk-table-th sortable>规格</zk-table-th>
          <zk-table-th sortable>成本价</zk-table-th>
          <zk-table-th>批发价</zk-table-th>
          <zk-table-th>售价</zk-table-th>
        </zk-table-tr>
      </zk-table-head>
      <zk-table-body>
        <zk-table-tr v-for="i in 10" :key="i">
          <zk-table-td selection :selection-data="i"></zk-table-td>
          <zk-table-td>123123123</zk-table-td>
          <zk-table-td>
            <zk-text-line :width="200" :clamp="2">1加OnePlus-6（一加6）6+64G亮瓷黑 幻夜黑 三网(5.5寸)灰</zk-text-line>
          </zk-table-td>
          <zk-table-td>阿萨德</zk-table-td>
          <zk-table-td>阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德</zk-table-td>
        </zk-table-tr>
      </zk-table-body>
    </zk-table>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleSelectionChange () {
      console.log(arguments)
    }
  }
}
</script>

<style lang="scss">
</style>
