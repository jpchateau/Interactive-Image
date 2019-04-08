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
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
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
            template: './src/demo.html',
            filename: '../demo/demo.html'
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
