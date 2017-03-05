require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file');
const base = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = 'production';

try {
  envFile(path.join(__dirname, `config/${process.env.NODE_ENV}.env`));
} catch (e) {
  throw e;
}

module.exports = merge(base, {
  devtool: 'source-map',
  target: 'web',
  entry: {
    js: [
      path.resolve(__dirname, 'src/app.js')
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
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   },
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common', minChunks: 2 }),
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
    rules: [
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=img/[name].[ext]' },
      { test: /\.ico$/, loader: 'file-loader?name=img/[name].[ext]' },
      { test: /(\.css|\.scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  }
});
