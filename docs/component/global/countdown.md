## Countdown 倒计时

### 使用方式

```html
/*vue*/

<template>
  <div>
    <zk-countdown date="2020-01-01"></zk-countdown>
  </div>
</template>

<script>
  export default {}
</script>

<desc>
  通过 `date` 属性传入一个未来的时间
<desc>
```

### 使用插槽格式化

```html
/*vue*/

<template>
  <div>
    <zk-countdown date="2020-01-01">
      <template slot-scope="{ days, hours, minutes, second }">
        <span>{{ days }}</span>
        <span>天</span>
        <span>{{ hours }}</span>
        <span>时</span>
        <span>{{ minutes }}</span>
        <span>分</span>
        <span>{{ second }}</span>
        <span>秒</span>
      </template>
    </zk-countdown>
  </div>
</template>

<script>
  export default {}
</script>

<desc>
  通过 `date` 属性传入一个未来的时间
<desc>
```
