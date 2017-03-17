const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.development.babel.js');
// const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: {
    colors: true
  }
}).listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost: ${PORT}`);
});
