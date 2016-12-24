var path = require('path');

module.exports = {
    externals: {
        jquery: 'jQuery'
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './node_modules/bootstrap-sass/stylesheets/bootstrap.scss')]
    },
    module: {
        loaders: [
            {
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
                loader: "file-loader?name=/fonts/[name].[ext]"
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader?name=/img/[name].[ext]"
            }
        ]
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
          'node_modules',
          'bower_components',
          './src/components/containers/scenes',
          './src/components/containers/wrappers',
          './src/components/presentationals/modals',
          './src/components/presentationals/reuseables'
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
    }
}
