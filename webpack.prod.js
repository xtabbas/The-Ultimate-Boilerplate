require("babel-polyfill")
var path = require('path');
var webpack = require('webpack');
var envFile = require('node-env-file')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = 'production'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

module.exports = {
    entry: {
        common: [
          'script!jquery/dist/jquery.min.js',
          'script!bootstrap-sass/assets/javascripts/bootstrap.min.js'
          'script!toastr/toastr.js',
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
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
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
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common',
          minChunks: 2
        }),
        new ExtractTextPlugin('css/[name].css')

    ],
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            'bower_components',
            './src/components'
        ],
        alias: {
            src: 'src',
            react: path.join(__dirname, 'node_modules', 'react'),
            configureStore: 'src/store/configureStore.js'
        },
        extensions: ['', '.js']
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, '..', '..', 'src')
        }, {
            test: /\.css?$/,
            loader: "style-loader!css-loader",
            include: __dirname
        }, {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: "file-loader?name=fonts/[name].[ext]"
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            loader: "file-loader?name=img/[name].[ext]"
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader!' +
              'autoprefixer-loader?browsers=last 3 version' +
              '!sass-loader?outputStyle=expanded&' +
              'includePaths[]=' + path.resolve(__dirname, './node_modules'))
        }]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/bootstrap-sass/stylesheets/bootstrap.scss')
        ]
    }
};
