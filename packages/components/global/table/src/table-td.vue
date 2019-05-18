<template>
  <td v-if="selectionAll" class="zk-table-td">
    <zk-checkbox v-model="selectionValue" @change="onSelectionAllChange"></zk-checkbox>
  </td>
  <td v-else-if="selection" class="zk-table-td">
    <zk-checkbox v-model="selectionValue" @change="onSelectionChange"></zk-checkbox>
  </td>
  <td
    v-else
    :class="['zk-table-td', {
      'zk-table-td--border': border
    }]">
    <slot></slot>
  </td>
</template>

<script>
import emitter from '../../../../mixins/emitter.js'

export default {
  name: 'ZkTableTd',
  componentName: 'ZkTableTd',
  mixins: [emitter],
  inject: ['zkTable'],
  props: {
    border: {
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
      selectionValue: false
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
    initBindTable (type, olbType) {
      this.destroyBindTable(olbType)
      if (type === 'selection-all') {
        this.dispatch('ZkTable', 'zk.table.addSelectionAllInstance', [this])
      } else if (type === 'selection') {
        this.dispatch('ZkTable', 'zk.table.addSelectionInstance', [this])
      }
    },
    destroyBindTable (type) {
      if (type === 'selection-all') {
        this.dispatch('ZkTable', 'zk.table.removeSelectionAllInstance', [this])
      } else if (type === 'selection') {
        this.dispatch('ZkTable', 'zk.table.removeSelectionInstance', [this])
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
.zk-table-td--border {
  border: solid 1px #F0F0F0 !important;
}
</style>
