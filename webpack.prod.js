require("babel-polyfill")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file')
const base = require('./webpack.base');
const merge = require('webpack-merge');

process.env.NODE_ENV = 'production'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {}

module.exports = merge(base, {
    entry: {
        common: [
            'script!jquery/dist/jquery.min.js', 'script!bootstrap-sass/assets/javascripts/bootstrap.min.js', 'script!toastr/toastr.js'
        ],
        vendor: path.join(__dirname, 'src/app.js'),
        polyfill: ['babel-polyfill']
    },
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
        chunkFilename: '[name]_[chunkhash:20].js'
    },
    plugins: [
        new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'}),
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
        new ExtractTextPlugin('css/[name].css')

    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!' + 'autoprefixer-loader?browsers=last 3 version' + '!sass-loader?outputStyle=expanded&' + 'includePaths[]=' + path.resolve(__dirname, './node_modules'))
            }
        ]
    }
});
