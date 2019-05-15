## copyText 复制文本

用于将文本复制到剪切板中。

### 基本用法

```javascript
copyText('我是复制的文本...').then(() => {
  console.log('复制成功')
}, () => {
  console.log('复制失败')
})
```