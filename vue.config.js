const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 多页配置
    pages: {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        },
        admin: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pages/admin/main.js',
            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/admin.html',
            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'admin.html'
        },
    },
    // webpack-dev-server 相关配置
    devServer: {
        // 本地端口
        port: 9090,
        // 代理
        proxy: '',
        // eslint-loader警告配置
        overlay: {
            warnings: true,
            errors: true
        }
    },
    // webpack相关配置
    configureWebpack: {
        devtool: 'source-map',
    },
    chainWebpack: config => {
        config.plugin('define').tap(args => {
          const argv = process.argv
          const icourt = argv[argv.indexOf('--icourt-mode') + 1]
    
          args[0]['process.env'].MODE = `"${icourt}"`
    
          return args
        })
        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
          .test(/\.svg$/)
          .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]',
          })
    
        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
          .rule('images')
          .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      }
}