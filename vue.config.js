const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
            .rule('fonts')
            .test(/\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: '[name].[hash:8].[ext]',
                outputPath: 'fonts/'
            });
    }
})
