## ImageUpload 图片上传

### 引入组件

```javascript
import ImageUpload from 'zk-vue-ul/packages/components/global/image-upload'
```

### 基本使用

```html
/*vue*/

<template>
  <div>
    <zk-image-upload :http-request="httpRequest">
      <span slot="label">请选择图片</span>
      <span slot="upload-label">重新选择</span>
    </zk-image-upload>
  </div>
</template>

<script>
  export default {
    methods: {
      httpRequest (options) {
        const { data, onProgress, onSuccess, onError } = options
        // // data.file 文件

        // 开始模拟请求--------------------------------
        setTimeout(() => {
          onProgress({ loaded: 10, total: 100 })
          setTimeout(() => {
            onProgress({ loaded: 50, total: 100 })
              setTimeout(() => {
                onProgress({ loaded: 100, total: 100 })
                  setTimeout(() => {
                    onError('上传失败！')
                  }, 200)
              }, 200)
          }, 200)
        }, 200)
        // 结束模拟请求--------------------------------
      }
    }
  }
</script>
```

!> 其他参数自行摸索