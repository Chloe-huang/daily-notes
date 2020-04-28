module.exports = {
  publicPath: '/', //根路径
  outputDir: 'dist', //打包的时候生成的一个文件名
  assetsDir: 'assets', //静态资源目录(js,css,img,fonts)这些文件都可以写里面
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        // markdown-it config
        preset: 'default',
        breaks: true,
        raw: true,
      });
  },
};
