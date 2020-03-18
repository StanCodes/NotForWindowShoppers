const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd = (process.env.NODE_ENV === 'production')

const port = 3000,
    host = 'localhost'

const optimize = {
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            styles: {
                name: 'styles',
                test: /\.(css|sass|scss)$/,
                chunks: 'all',
                enforce: true,
                minChunks: 1,
                //reuseExistingChunk: true,
            }
        }
    }
}

const styles2 = [
    { loader: !isProd? MiniCssExtractPlugin.loader : 'style-loader' },
    {
        loader: 'css-loader',
        options: {
            sourceMap: !isProd,
            //modules: true,
        }
    },
    { loader: 'postcss-loader' },
    {
        loader: 'sass-loader',
        options: {
            sourceMap: !isProd,
        }
    }]

module.exports = {
    mode: isProd? 'production': 'development',
    entry: [
        '@babel/polyfill',
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: styles2
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'content/fonts/'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from:'src/content/images', to: 'content/images' },
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    optimization: {},
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: host,
        port: port,
        historyApiFallback: true,
        compress: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    }
}