## Checkbox 复选框

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-checkbox v-model="value"></zk-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: true
      }
    }
  }
</script>
```

### 标签插槽

```html
/*vue*/

<template>
  <div>
    <zk-checkbox v-model="value">标签</zk-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: true
      }
    }
  }
</script>
```

### 设置值

```html
/*vue*/

<template>
  <div>
    <zk-checkbox
      v-model="value"
      true-label="勾上了"
      false-label="没勾上">
      <span>{{ value }}</span>
    </zk-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: '勾上了'
      }
    }
  }
</script>

<desc>
  `true-label` 属性为选中时的值，`false-label` 属性为没有选中时的值。
<desc>
```

### 多个的时候

```html
/*vue*/

<template>
  <div>
    <zk-checkbox v-model="value1">标签1</zk-checkbox>
    <zk-checkbox v-model="value2">标签2</zk-checkbox>
    <zk-checkbox v-model="value3">标签3</zk-checkbox>
    <zk-checkbox v-model="value4">标签4</zk-checkbox>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: false,
        value2: false,
        value3: false,
        value4: false
      }
    }
  }
</script>
```
