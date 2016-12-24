const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file')
const base = require('./webpack.base');
const merge = require('webpack-merge');

process.env.NODE_ENV = 'development'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}

module.exports = merge(base, {
    eslint: {
        configFile: path.join(__dirname, '.eslintrc')
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000/',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader?{rules:{semi:0}}",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
  });
