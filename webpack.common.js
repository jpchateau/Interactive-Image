const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        'interactive-image': './src/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: '../examples/index.html'
        }),
        new webpack.BannerPlugin({
            banner: '[name] v2.3.0\nhttps://github.com/jpchateau\nJean-Philippe Chateau - <contact@jpchateau.com>\nMIT License'
        })
    ],
    externals: {
        jquery: 'jQuery'
    },
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    }
};
