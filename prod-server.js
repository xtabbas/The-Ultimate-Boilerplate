const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');
const openBrowser = require('react-dev-utils/openBrowser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

const root = path.join(__dirname, 'dist');
app.use(fallback('index.html', { root }));

openBrowser(`http://localhost:${3000}/`);

module.exports = app;
