const path = require('path')

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('@$', path.resolve('packages'))
      .set('zk-vue-ui', path.resolve(''))
    // console.log(config.module
    //   .rule('js').include.add('packages'))
    // config.module
    //   .rule('js')
    //   .include
    //   .add('packages')
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
  }
}
