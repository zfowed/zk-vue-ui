## Popover 悬浮框

### 引入组件

```javascript
import Popover from 'zk-vue-ul/packages/components/global/popover'
```

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-popover trigger="hover" placement="top-start" width="200">
      <zk-button type="primary" slot="reference">hover 激活</zk-button>
      <div class="popover">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
    </zk-popover>
    <zk-popover trigger="click" placement="bottom" width="200">
      <zk-button type="primary" slot="reference">click 激活</zk-button>
      <div class="popover">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
    </zk-popover>
    <zk-popover trigger="focus" placement="right" width="200">
      <zk-button type="primary" slot="reference">focus 激活</zk-button>
      <div class="popover">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
    </zk-popover>
    <zk-popover v-model="visible" trigger="manual" placement="bottom" width="200">
      <zk-button type="primary" slot="reference" @click="visible = !visible">手动激活</zk-button>
      <div class="popover">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
    </zk-popover>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style>
.popover {
  background: #fff;
  box-shadow: 0 0 5px #999;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
}
</style>
```

### 嵌套信息

```html
/*vue*/

<template>
  <div>
    <zk-popover trigger="click" placement="right" width="500">
      <zk-button slot="reference">click 激活</zk-button>
      <zk-table class="popover">
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
    </zk-popover>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    }
  }
</script>

<style>
.popover {
  background: #fff;
  box-shadow: 0 0 5px #999;
  padding: 10px;
  margin: 10px;
  box-sizing: border-box;
}
</style>
```