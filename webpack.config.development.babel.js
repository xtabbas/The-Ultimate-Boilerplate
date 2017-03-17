const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file');
const base = require('./webpack.config.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

process.env.NODE_ENV = 'development';

try {
  envFile(path.join(__dirname, `config/${process.env.NODE_ENV}.env`));
} catch (e) {
  throw e;
}

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // favicon: 'src/styles/images/favicon.png',
      inject: true
    }),
    new HappyPack({ id: 'js', threads: 4, loaders: ['babel-loader', 'eslint-loader?{rules:{semi:0}}'] }),
    new HappyPack({ id: 'css', threads: 4, loaders: ['style-loader', 'css-loader'] }),
    new HappyPack({ id: 'sass', threads: 4, loaders: ['style-loader', 'css-loader', 'sass-loader'] })

  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'happypack/loader?id=js', exclude: /node_modules/, include: path.join(__dirname, 'src') },
      // { test: /\.js$/, loader: 'happypack/loader?id=js', exclude: /node_modules/, enforce: 'pre' },
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader' },
      { test: /\.css?$/, loader: 'happypack/loader?id=css', include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: 'happypack/loader?id=sass', include: path.join(__dirname, 'src') }
    ]
  }
});
