const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
      config.mode = 'production';
      config["performance"] = {//打包文件大小配置
        "maxEntrypointSize": 10000000,
        "maxAssetSize": 30000000
      }
    }
  },
  devServer: {
    port: 8082,
  }
})


