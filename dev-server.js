const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');
// var mongoose = require('mongoose');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

// connect to database here
// mongoose.connect(process.env.MONGO_URI);
// mongoose.connection.on('error', function() {
//     console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
// });

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  setup(app) {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    const server = require('http').createServer(app);
    // const net = require('net');

    let onlineUsers = 0;

    // const HOST = 'https://ws.chatkoo.com';
    // const client = new net.Socket();
    // const numUsers = 0;

    // now setup the sockets.io functionality
    const io = require('socket.io')(server);

    io.on('connection', (socket) => {
      console.log(`A client is connected:${socket.id}`);
      onlineUsers++;
      io.sockets.emit('onlineUsers', {
        onlineUsers
      });
    });

    server.listen(3000, () => {
      console.log('listening on *:3000');
    });
    // call api and set secret if any
    // require('./api/accounts/signin')(app);
    // app.set('super-secret', process.env.APP_SECRET)
  }
}).listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost: ${PORT}`);
});
