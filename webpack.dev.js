var path = require('path');
var webpack = require('webpack');
var envFile = require('node-env-file')

process.env.NODE_ENV = 'development'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

module.exports = {
        devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-dev-server/client?http://localhost:3000/',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            'script!jquery/dist/jquery.min.js',
            'script!bootstrap-sass/assets/javascripts/bootstrap.min.js',
            'script!toastr/toastr.js',
            './src/app.js'
        ],
        externals: {
            jquery: 'jQuery'
        },
        output: {
            path: path.join(__dirname, 'public'),
            publicPath: '/public/',
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            })
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
                    loader: "file"
                }, {
                    test: /\.(jpe?g|png|gif)$/i,
                    loader: "file"
                }, {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader', 'sass-loader']
            }]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/bootstrap-sass/stylesheets/bootstrap.scss')
        ]
    }
};
