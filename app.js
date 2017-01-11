const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');

const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// include api here
// require('./api/accounts/signin')(app);

const root = path.join(__dirname, 'public');
app.use(fallback('index.html', { root }));

// connect to database
// mongoose.connect(process.env.MONGO_URI);
// mongoose.connection.on('error', function() {
//     console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
// });

// setup app secret for JWT if any
// app.set('super-secret', process.env.APP_SECRET)

module.exports = app;
