require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const getClientEnvironment = require('./bin/env');
const paths = require('./bin/paths');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = merge(base, {
  devtool: 'source-map',
  target: 'web',
  entry: {
    js: [
      path.resolve(__dirname, 'src/main.js')
    ],
    vendor: [
      'react', 'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    new WebpackMd5Hash(),
    new CaseSensitivePathsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: false
    //   }
    // }),
    new ProgressBarPlugin({
      format: '(:current/:total) (:msg) [:bar] (:percent)',
      clear: false
    }),
    new webpack.DefinePlugin(env.stringified),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', minChunks: 2 }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/styles/images/favicon.jpg',
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
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, include: path.join(__dirname, 'src') },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=img/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=img/[name].[ext]' },
      { test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap',
            'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
          ]
        })
      }
    ]
  }
});
