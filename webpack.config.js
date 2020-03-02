const { resolve } = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool:'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                exclude: /(node_modules)/,
                use:[
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|webp)$/,
                exclude: /(node_modules)/,
                use:[
                    { loader: 'file-loader'}
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        hot: true,
    },
    performance: {
        hints: 'warning'
      }
};