const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //入口
    entry: {
        main: './main.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }, {
            test: /.(jpg|png|ttf|svg|bmp|gif)$/,
            loader: 'url-loader?limit=4096',
        }, {
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }, {
            test: /.vue$/,
            loader: 'vue-loader', //vue-loader 依赖vue-template-compiler
        }]
    },
    plugins: [new htmlWebpackPlugin({
        template: './index.html'
    })]
}
