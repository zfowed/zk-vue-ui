<template>
  <div class="zk-table-adaptive">
    <table
      border="0"
      :class="['zk-table', {
        'zk-table--stripe': stripe,
        'zk-table--border': border
      }]">
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ZkTable',
  componentName: 'ZkTable',
  props: {
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      zkTable: this
    }
  },
  data () {
    return {
      selectionAllInstanceList: [],
      selectionInstanceList: [],
      sortInstanceList: []
    }
  },
  computed: {
    isSelectAll: {
      get () {
        if (!this.selectionInstanceList.length) return false
        return this.selectionInstanceList.every(instance => {
          return instance.selectionValue
        })
      },
      set (value) {
        for (const instance of [...this.selectionInstanceList, ...this.selectionAllInstanceList]) {
          if (instance.selectionValue === value) continue
          instance.selectionValue = value
        }
        this.$emit('selection-change', this.selectionDataList)
      }
    },
    selectionDataList () {
      return this.selectionInstanceList.filter(instance => {
        return instance.selectionValue
      }).map(instance => {
        return instance.selectionData
      })
    }
  },
  watch: {
    selectionInstanceList () {
      this.isSelectAll = this.isSelectAll
    }
  },
  methods: {
    // 添加全选实例
    onAddSelectionAllInstance (instance) {
      this.selectionAllInstanceList.push(instance)
    },
    // 注销全选实例
    onRemoveSelectionAllInstance (instance) {
      const index = this.selectionAllInstanceList.indexOf(instance)
      if (index < 0) return
      this.selectionAllInstanceList.splice(index, 1)
    },
    // 添加单选实例
    onAddSelectionInstance (instance) {
      this.selectionInstanceList.push(instance)
    },
    // 注销加单实例
    onRemoveSelectionInstance (instance) {
      const index = this.selectionInstanceList.indexOf(instance)
      if (index < 0) return
      this.selectionInstanceList.splice(index, 1)
    },
    // 添加排序实例
    onAddSortInstance (instance) {
      this.sortInstanceList.push(instance)
    },
    // 注销排序实例
    onRemoveSortInstance (instance) {
      const index = this.sortInstanceList.indexOf(instance)
      if (index < 0) return
      this.sortInstanceList.splice(index, 1)
    },
    // 全选
    onSelectionAllChange (instance) {
      if (this.__allSelectionValueIsChange) {
        this.__allSelectionValueIsChange = false
        return
      }
      this.isSelectAll = instance.selectionValue
    },
    // 单选
    onSelectionChange (instance) {
      for (const _instance of this.selectionAllInstanceList) {
        if (_instance.selectionValue === this.isSelectAll) continue
        this.__allSelectionValueIsChange = true
        _instance.selectionValue = this.isSelectAll
      }
      this.$emit('selection-change', this.selectionDataList)
    },
    // 排序
    onSortChange (instance) {
      for (const _instance of this.sortInstanceList) {
        if (instance === _instance) continue
        if (_instance.order === '') continue
        _instance.order = ''
      }
    }
  },
  created () {
    this.$on('zk.table.addSelectionAllInstance', this.onAddSelectionAllInstance)
    this.$on('zk.table.removeSelectionAllInstance', this.onRemoveSelectionAllInstance)
    this.$on('zk.table.selectionAllChange', this.onSelectionAllChange)

    this.$on('zk.table.addSelectionInstance', this.onAddSelectionInstance)
    this.$on('zk.table.removeSelectionInstance', this.onRemoveSelectionInstance)
    this.$on('zk.table.selectionChange', this.onSelectionChange)

    this.$on('zk.table.addSortInstance', this.onAddSortInstance)
    this.$on('zk.table.removeSortInstance', this.onRemoveSortInstance)
    this.$on('zk.table.sortChange', this.onSortChange)
  }
}
</script>

<style lang="scss" scoped>
.zk-table-adaptive {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #FFFFFF;
}
.zk-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  border: solid 1px #F0F0F0;
  background: #FFFFFF;
  /deep/ {
    .zk-table-tr {
      border: none;
      background: #ffffff;
      &:last-child {
        .zk-table-th,
        .zk-table-td {
          border-bottom: none;
        }
      }
    }
    .zk-table-th {
      font-weight: normal;
    }
    .zk-table-th,
    .zk-table-td {
      border: none;
      box-sizing: border-box;
      border-bottom: solid 1px #F0F0F0;
      color: #656565;
      font-size: 14px;
      text-align: left;
      vertical-align: top;
      padding: 18px 10px;
    }
    .zk-table-head {
      .zk-table-th,
      .zk-table-td {
        white-space: nowrap;
        background-color: #EDEDED;
        line-height: 16px;
        vertical-align: middle;
        padding-top: 12px;
        padding-bottom: 12px;
        border: 1px solid #e0e0e0;
      }
      .zk-table-tr:first-child:last-child {
        .zk-table-th,
        .zk-table-td {
          border: none;
        }
      }
    }
  }
}
.zk-table--border /deep/ {
  .zk-table-th,
  .zk-table-td {
    border: solid 1px #F0F0F0;
  }
}
.zk-table--stripe /deep/ {
  .zk-table-tr:nth-of-type(even) {
    .zk-table-th,
    .zk-table-td {
      background-color: #fafafa;
    }
  }
}
</style>
