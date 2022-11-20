const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      }),
    ],
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/trajectory-tracker/'
    : '/'
})
