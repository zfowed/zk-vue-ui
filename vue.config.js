const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 关闭文件名哈希
  filenameHashing: false,
  // 不需要生产环境的 source map
  productionSourceMap: false,
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('zk-vue-ui', path.resolve(''))
  },
  configureWebpack (config) {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new CompressionWebpackPlugin({
        test: new RegExp('\\.(js|css)$')
      }))
    }
  }
}
