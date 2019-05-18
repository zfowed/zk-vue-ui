## Table 表格

用于展示多条结构类似的数据。

### 基础表格

基础的表格展示用法。

```html
/*vue*/

<template>
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
        <zk-table-td>不瞭望的怪人</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
      </zk-table-tr>
    </zk-table-body>
  </zk-table>
</template>

<script>
  export default {}
</script>
```

### 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

```html
/*vue*/

<template>
  <zk-table :stripe="true">
    <zk-table-head>
      <zk-table-tr>
        <zk-table-th>日期</zk-table-th>
        <zk-table-th>姓名</zk-table-th>
        <zk-table-th>地址</zk-table-th>
      </zk-table-tr>
      </zk-table-head>
    <zk-table-body>
      <zk-table-tr v-for="i in 4" :key="i">
        <zk-table-td>2019-05-08</zk-table-td>
        <zk-table-td>不瞭望的怪人</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
      </zk-table-tr>
    </zk-table-body>
  </zk-table>
</template>

<script>
  export default {}
</script>

<desc>
  参数为：`stripe`
</desc>
```

### 带边框表格

```html
/*vue*/

<template>
  <zk-table :border="true">
    <zk-table-head>
      <zk-table-tr>
        <zk-table-th>日期</zk-table-th>
        <zk-table-th>姓名</zk-table-th>
        <zk-table-th>地址</zk-table-th>
      </zk-table-tr>
      </zk-table-head>
    <zk-table-body>
      <zk-table-tr v-for="i in 4" :key="i">
        <zk-table-td>2019-05-08</zk-table-td>
        <zk-table-td>不瞭望的怪人</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
      </zk-table-tr>
    </zk-table-body>
  </zk-table>
</template>

<script>
  export default {}
</script>

<desc>
  参数为：`border`
</desc>
```

### 多选

```html
/*vue*/

<template>
  <zk-table @selection-change="handleSelectionChange">
    <zk-table-head>
      <zk-table-tr>
        <zk-table-th :selection-all="true"></zk-table-th>
        <zk-table-th>日期</zk-table-th>
        <zk-table-th>姓名</zk-table-th>
        <zk-table-th>地址</zk-table-th>
      </zk-table-tr>
      </zk-table-head>
    <zk-table-body>
      <zk-table-tr v-for="i in 4" :key="i">
        <zk-table-th :selection="true"></zk-table-th>
        <zk-table-td>2019-05-08</zk-table-td>
        <zk-table-td>不瞭望的怪人</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
      </zk-table-tr>
    </zk-table-body>
  </zk-table>
</template>

<script>
  export default {
    data () {
      return {
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<desc>
  实现多选非常简单: 在每一列添加一个 `zk-table-td` 的组件，设 `selection` 属性 为 `true`；如果要全选的话，同样在头部添加一个 `zk-table-th` 的组件，设 `selection-all` 属性 为 `true`即可。
</desc>
```

### 排序

对表格进行排序，可快速查找或对比数据。

```html
/*vue*/

<template>
  <zk-table>
    <zk-table-head>
      <zk-table-tr>
        <zk-table-th :sortable="true" @sort-change="handleSortChange1">日期</zk-table-th>
        <zk-table-th :sortable="true" @sort-change="handleSortChange2">姓名</zk-table-th>
        <zk-table-th>地址</zk-table-th>
      </zk-table-tr>
      </zk-table-head>
    <zk-table-body>
      <zk-table-tr v-for="i in 4" :key="i">
        <zk-table-td>2019-05-08</zk-table-td>
        <zk-table-td>不瞭望的怪人</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
      </zk-table-tr>
    </zk-table-body>
  </zk-table>
</template>

<script>
  export default {
    methods: {
      handleSortChange1(order) {
        console.log(order)
      },
      handleSortChange2(order) {
        console.log(order)
      }
    }
  }
</script>

<desc>
  在头部列中 的 `zk-table-tr` 中设置 `sortable` 属性即可创建出排序按钮；可以监听 `sort-change` 事件进行改变数据，会传入一个参数：`order` 区别正序或倒序，可以根据自己的需求进行处理。
</desc>
```

### 单元格合并

```html
/*vue*/

<template>
  <zk-table>
    <zk-table-head>
      <zk-table-tr>
        <zk-table-th colspan="1" rowspan="3">日期</zk-table-th>
        <zk-table-th colspan="5" rowspan="1">配送信息</zk-table-th>
      </zk-table-tr>
      <zk-table-tr>
        <zk-table-th colspan="1" rowspan="2">姓名</zk-table-th>
        <zk-table-th colspan="4" rowspan="1">地址</zk-table-th>
      </zk-table-tr>
      <zk-table-tr>
        <zk-table-th colspan="1" rowspan="1">省份</zk-table-th>
        <zk-table-th colspan="1" rowspan="1">市区</zk-table-th>
        <zk-table-th colspan="1" rowspan="1">地址</zk-table-th>
        <zk-table-th colspan="1" rowspan="1">邮编</zk-table-th>
      </zk-table-tr>
      </zk-table-head>
    <zk-table-body>
      <zk-table-tr v-for="(i, index) in 4" :key="i">
        <zk-table-td v-if="index % 2 === 0" :border="true" rowspan="2">2019-05-08</zk-table-td>
        <zk-table-td>不瞭望的怪人</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
        <zk-table-td>你猜不到~猜不到~</zk-table-td>
      </zk-table-tr>
    </zk-table-body>
  </zk-table>
</template>

<script>
  export default {}
</script>
```
