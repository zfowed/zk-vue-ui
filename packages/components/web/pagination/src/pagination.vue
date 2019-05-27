<template>
  <div v-if="total" :class="['zk-pagination', { [`zk-pagination--${align}`]: align }]">

    <span class="zk-pagination-total">共 {{ total }} 条</span>

    <span class="zk-pagination-prev" v-if="viewPage > 1" @click="goto(viewPage - 1)">上一页</span>

    <template v-if="pageNumList[0] !== 1">
      <span class="zk-pagination-item" @click="goto(1)">1</span>
      <span v-if="pageNumList[0] !== 2" class="zk-pagination-omit">...</span>
    </template>

    <span
      v-for="num in pageNumList"
      :key="num"
      :class="['zk-pagination-item', { 'is-active': viewPage === num }]"
      @click="goto(num)">
      <span>{{ num }}</span>
    </span>

    <template v-if="pageNumList[pageNumList.length-1] !== pageCount">
      <span v-if="pageNumList[pageNumList.length-1] !== pageCount - 1" class="zk-pagination-omit">...</span>
      <span class="zk-pagination-item" @click="goto(pageCount)">{{ pageCount }}</span>
    </template>

    <span class="zk-pagination-next" v-if="viewPage < pageCount" @click="goto(viewPage + 1)">下一页</span>

    <!-- <span class="zk-pagination-input-before">前往</span>
    <input class="zk-pagination-input"
      type="number"
      v-model.number="inputPage">
    <span class="zk-pagination-input-after">页</span> -->

  </div>
</template>

<script>
export default {
  name: 'ZkPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageDisplacement: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      inputPage: this.currentPage - this.pageDisplacement,
      viewPage: this.currentPage - this.pageDisplacement
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.total / this.pageSize)
    },
    pageNumList () {
      const viewPage = this.viewPage
      const pageCount = this.pageCount
      let rows = 5
      let pageNumList = []
      if (pageCount <= rows) {
        for (let i = 0; i < (rows > pageCount ? pageCount : rows); i++) {
          pageNumList.push(i + 1)
        }
      } else {
        if (viewPage <= Math.floor(rows / 2)) {
          for (let i = 0; i < (rows > pageCount ? pageCount : rows); i++) {
            pageNumList.push(i + 1)
          }
        } else if (pageCount - viewPage < Math.floor(rows / 2)) {
          for (let i = rows - 1; i >= 0; i--) {
            pageNumList.push(pageCount - i)
          }
        } else {
          for (let i = Math.floor(rows / 2); i >= 1; i--) {
            pageNumList.push(viewPage - i)
          }
          pageNumList.push(viewPage)
          for (let i = 1; i <= Math.floor(rows / 2); i++) {
            pageNumList.push(viewPage + i)
          }
        }
      }
      return pageNumList
    }
  },
  watch: {
    currentPage () {
      this.inputPage = this.currentPage - this.pageDisplacement
      this.viewPage = this.currentPage - this.pageDisplacement
    },
    inputPage (value) {
      if (!value) return
      value = Math.floor(Number(value))
      if (value > this.pageCount) {
        value = this.pageCount
      } else if (value < 1) {
        value = 1
      }
      if (this.inputPage !== value) {
        this.inputPage = value
      } else {
        const currentPage = value + this.pageDisplacement
        this.$emit('update:current-page', Number(currentPage))
        this.$emit('current-change', Number(currentPage))
        if (this.viewPage !== value) {
          this.viewPage = value
        }
      }
    }
  },
  methods: {
    goto (value) {
      this.inputPage = value
    }
  }
}
</script>

<style lang="scss" scoped>
.zk-pagination {
  color: #656565;
  text-align: left;
  &.zk-pagination--left {
    text-align: left;
  }
  &.zk-pagination--right {
    text-align: right;
  }
  span {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
  }
  .zk-pagination-total {
    margin-right: 15px;
  }
  .zk-pagination-prev {
    cursor: pointer;
    margin-right: 18px;
    &:hover {
      color: #0B7AFB;
    }
  }
  .zk-pagination-item {
    cursor: pointer;
    padding: 0 11px;
    margin-right: 10px;
    box-sizing: border-box;
    border: solid 1px #eaeaea;
    transition: color .2s, border-color .2s, background-color .2s;
    border-radius: 4px;
    &.is-active {
      color: #FFFFFF;
      border-color: #0B7AFB;
      background-color: #0B7AFB;
    }
  }
  .zk-pagination-omit {
    margin-right: 10px;
    box-sizing: border-box;
  }
  .zk-pagination-next {
    cursor: pointer;
    margin-right: 24px;
    margin-right: 21px;
    &:hover {
      color: #0B7AFB;
    }
  }
  .zk-pagination-input-before {
    margin-right: 5px;
  }
  .zk-pagination-input {
    margin-right: 6px;
    height: 30px;
    width: 50px;
    padding: 0 10px;
    border: solid 1px #eaeaea;
    color: #656565;
    box-sizing: border-box;
    outline: none;
    text-align: center;
    appearance: textfield;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
  }
  .zk-pagination-input-after {
  }
}
</style>
