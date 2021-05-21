const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    entry: {
        'interactive-image': resolveAppPath('src/js'),
    },
    output: {
        path: resolveAppPath('dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
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
                loader: 'file-loader',
                options: {
                    esModule: false,
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                },
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
            banner: '[name] v2.7.1\nhttps://github.com/jpchateau\nJean-Philippe Chateau - <contact@jpchateau.com>\nMIT License'
        })
    ],
    externals: {
        jquery: 'jQuery'
    },
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    },
    devServer: {
        compress: true,
        port: 8080
    }
};
