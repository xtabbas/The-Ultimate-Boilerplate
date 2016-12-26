require("babel-polyfill")
const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file')
const base = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}

module.exports = merge(base, {
    entry: {
        common: [
          // 'script!jquery/dist/jquery.min.js',
          // 'script!toastr/toastr.js',
        ],
        vendor: path.join(__dirname, 'src/app.js'),
        polyfill: ['babel-polyfill']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
        publicPath: '/',
        chunkFilename: '[name]_[chunkhash:20].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'common', minChunks: 2}),
        new HtmlWebpackPlugin({
          template: 'src/index.html',
          // favicon: 'src/client/assets/favicon.ico',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          },
          inject: true
        })
    ],
    module: {
        loaders: [
          {
              test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
              loader: "file-loader?name=fonts/[name].[ext]"
          }, {
              test: /\.(jpe?g|png|gif)$/i,
              loader: "file-loader?name=img/[name].[ext]"
          }
        ]
    }
});
