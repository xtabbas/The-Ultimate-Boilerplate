var path = require('path');
var webpack = require('webpack');
var envFile = require('node-env-file')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

var entry = []
var myplugin
if(process.env.NODE_ENV === 'production'){
  entry = [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    path.join(__dirname, 'src/app.js')
  ]

  myplugin = new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })

} else {
  entry = [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.js'
  ]

  myplugin = new webpack.HotModuleReplacementPlugin()
}

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
  entry: entry,
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
    myplugin,
    new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGE_SENDER_ID: JSON.stringify(process.env.MESSAGE_SENDER_ID)
            }
        })

  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
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
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  }
};
