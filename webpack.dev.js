const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file');
const base = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

try {
  envFile(path.join(__dirname, `config/${process.env.NODE_ENV}.env`));
} catch (e) {
  throw e;
}

module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/app.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new HtmlWebpackPlugin({ template: 'src/index.html', inject: true })
  ],
  module: {
    rules: [
      { test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/, loader: 'file-loader' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader' },
      { test: /\.js$/, loader: 'eslint-loader?{rules:{semi:0}}', exclude: /node_modules/, enforce: 'pre' },
      { test: /\.css?$/, loader: 'style-loader!css-loader', include: path.join(__dirname, 'src') },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  }
});
