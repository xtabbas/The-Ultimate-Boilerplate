const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const base = require('./webpack.base');

process.env.NODE_ENV = 'production'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}

module.exports = merge(base, {
  devtool: 'source-map',
  entry: {
    demo: 'src/app.js'
  },
  output: {
    path: 'build',
    filename: 'static/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'postcss'],
        include: path.join(__dirname, 'source')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?importLoaders=1'],
        include: path.join(__dirname, 'styles.css')
      },
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
