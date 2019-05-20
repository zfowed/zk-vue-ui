## Popover 悬浮框

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-button @click="visible = !visible">点击我</zk-button>
    <zk-popup-layer :visible.sync="visible">
      <div class="popup">
        这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </div>
    </zk-popup-layer>
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
.popup {
  background: #fff;
}
</style>
```

### 没有遮罩层

```html
/*vue*/

<template>
  <div>
    <zk-button @click="visible = !visible">点击我</zk-button>
    <zk-popup-layer :visible.sync="visible" :modal="false">
      <div class="popup">
        这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </div>
    </zk-popup-layer>
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
.popup {
  background: #fff;
}
</style>
```

### 方向

```html
/*vue*/

<template>
  <div>
    <zk-button @click="show('center')">居中</zk-button>
    <zk-button @click="show('top')">上</zk-button>
    <zk-button @click="show('right')">右</zk-button>
    <zk-button @click="show('bottom')">下</zk-button>
    <zk-button @click="show('left')">左</zk-button>

    <zk-popup-layer :visible.sync="visible" :placement="placement">
      <div :class="`popup popup-${placement}`">
        这是一段内容,这是一段内容,这是一段内容,这是一段内容。
      </div>
    </zk-popup-layer>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        placement: 'top',
        visible: false
      }
    },
    methods: {
      show (placement) {
        this.placement = placement
        this.visible = true
      }
    }
  }
</script>

<style>
.popup {
  background: #fff;
}
.popup-center {
  width: 200px;
  height: 200px;
}
.popup-top,
.popup-bottom {
  width: 100%;
  height: 200px;
}
.popup-left,
.popup-right {
  width: 200px;
  height: 100%;
}
</style>
```

!> 更多功能请自行摸索
