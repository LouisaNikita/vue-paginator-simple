const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './example/index',
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    // Refer to: https://github.com/vuejs/vue-loader/blob/master/docs/en/configurations/extract-css.md#webpack-2x-210-beta25
                    css: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            }
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html'
        }),
        new ExtractTextPlugin('vue-paginator-simple.css')
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
};
module.exports = config;
