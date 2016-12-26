var path = require('path');

module.exports = {
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './src/components/containers',
            './src/components/presentationals'
        ],
        alias: {
            src: 'src',
            react: path.join(__dirname, 'node_modules', 'react'),
            configureStore: 'src/store/configureStore.js'
        },
        extensions: ['', '.js']
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
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    }
}
