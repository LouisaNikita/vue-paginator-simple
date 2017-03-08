var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV != 'production') process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var PRODUCTION = process.env.NODE_ENV == 'production';

var config = {
    entry: {
        app: './src/index',
    },

    output: {
        path: path.resolve('dist'),
        filename: PRODUCTION ? '[name]-[chunkhash].js' : '[name].js',
        publicPath: PRODUCTION ? '/assets/' : '/',
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
                        fallbackLoader: 'vue-style-loader'
                    })
                }
            }
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },{
            test: /\.(jpg|png|gif|svg)$/,
            loader: 'file-loader',
        }]
    },
    resolve: {
        modules: [
            'src',
            'node_modules',
        ],
        alias: {
            // vue: 'vue/dist/vue.js'
        },
    },
    plugins: [
        new webpack.ProvidePlugin({}),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ExtractTextPlugin(PRODUCTION ? '[name]-[chunkhash].css' : '[name].css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
            PRODUCTION: JSON.stringify(PRODUCTION),
            APP_CONFIG: JSON.stringify(appConfig[process.env.NODE_ENV]),
        }),
        new webpack.LoaderOptionsPlugin({
            vue: {
                // use custom postcss plugins
                postcss: function(webpack) {
                    return [
                        require('postcss-smart-import')({
                            addDependencyTo: webpack,
                            path: [path.resolve('src')],
                        }),
                        require('postcss-nested'),
                        require('postcss-cssnext')({
                            'browsers': [
                                '> 1%',
                                'last 2 versions',
                                'ios_saf >= 6',
                            ]
                        }),
                    ];
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
    ],
    devtool: 'source-map',
};

PRODUCTION && Array.prototype.push.apply(config.plugins, [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
]);

module.exports = config;
