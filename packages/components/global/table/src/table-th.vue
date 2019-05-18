<template>
  <th v-if="selectionAll" class="zk-table-th">
    <zk-checkbox v-model="selectionValue" @change="onSelectionAllChange"></zk-checkbox>
  </th>
  <th v-else-if="selection" class="zk-table-th">
    <zk-checkbox v-model="selectionValue" @change="onSelectionChange"></zk-checkbox>
  </th>
  <th
    v-else
    :class="['zk-table-th', {
      'zk-table-th--ascending': sortAscending,
      'zk-table-th--descending': sortDescending,
      'zk-table-th--border': border
    }]">
    <slot></slot>
    <span v-if="sortable" class="sort-wrapper" @click="onClickSort">
      <i class="sort-caret ascending"></i>
      <i class="sort-caret descending"></i>
    </span>
  </th>
</template>

<script>
import emitter from '../../../../mixins/emitter.js'

export default {
  name: 'ZkTableTh',
  componentName: 'ZkTableTh',
  mixins: [emitter],
  inject: ['zkTable'],
  props: {
    border: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: false
    },
    selectionAll: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Boolean,
      default: false
    },
    selectionData: {}
  },
  data () {
    return {
      selectionValue: false,
      sortOrder: '',
      sortOrderToggleMap: {
        '': 'ascending',
        'ascending': 'descending',
        'descending': ''
      }
    }
  },
  computed: {
    type () {
      if (this.selectionAll) {
        return 'selection-all'
      } else if (this.selection) {
        return 'selection'
      }
      return ''
    },
    sortAscending () {
      return this.sortOrder === 'ascending'
    },
    sortDescending () {
      return this.sortOrder === 'descending'
    }
  },
  watch: {
    type: 'initBindTable'
  },
  methods: {
    onSelectionChange () {
      this.dispatch('ZkTable', 'zk.table.selectionChange', [this])
      this.$emit('selection-change', this.selectionValue, this.selectionData)
    },
    onSelectionAllChange () {
      this.dispatch('ZkTable', 'zk.table.selectionAllChange', [this])
      this.$nextTick(() => {
        this.$emit('selection-all-change', this.selectionValue, this.zkTable.selectionDataList)
      })
    },
    onClickSort () {
      this.sortOrder = this.sortOrderToggleMap[this.sortOrder] || ''
      this.$emit('sort-change', this.sortOrder || undefined)
      this.dispatch('ZkTable', 'zk.table.sortChange', [this])
    },
    initBindTable (type, olbType) {
      this.destroyBindTable(olbType)
      if (type === 'selection-all') {
        this.dispatch('ZkTable', 'zk.table.addSelectionAllInstance', [this])
      } else if (type === 'selection') {
        this.dispatch('ZkTable', 'zk.table.addSelectionInstance', [this])
      } else if (this.sortable) {
        this.dispatch('ZkTable', 'zk.table.addSortInstance', [this])
      }
    },
    destroyBindTable (type) {
      if (type === 'selection-all') {
        this.dispatch('ZkTable', 'zk.table.removeSelectionAllInstance', [this])
      } else if (type === 'selection') {
        this.dispatch('ZkTable', 'zk.table.removeSelectionInstance', [this])
      } else if (this.sortable) {
        this.dispatch('ZkTable', 'zk.table.removeSortInstance', [this])
      }
    }
  },
  mounted () {
    this.initBindTable(this.type)
  },
  beforeDestroy () {
    this.destroyBindTable()
  }
}
</script>

<style lang="scss" scoped>
.sort-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 16px;
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  overflow: initial;
  position: relative;
  .sort-caret {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    position: absolute;
    left: 7px;
    &.ascending {
      border-bottom-color: #c0c4cc;
      top: -3px;
    }
    &.descending {
      border-top-color: #c0c4cc;
      bottom: -3px;
    }
  }
}
.zk-table-th--ascending .sort-caret.ascending {
  border-bottom-color: #0B7AFB;
}
.zk-table-th--descending .sort-caret.descending {
  border-top-color: #0B7AFB;
}
.zk-table-th--border {
  border: solid 1px #F0F0F0 !important;
}
</style>
