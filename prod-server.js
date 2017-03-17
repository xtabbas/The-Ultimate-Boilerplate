const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

const root = path.join(__dirname, 'dist');
app.use(fallback('index.html', { root }));

const manifest = require('./manifest.json');
// React server-side rendering
app.get('*', (req, res) => {
  let preloadScripts;
  let entry;
  let webpackManifest;

  if (app.locals.production) {
    // Set entry point
    entry = manifest.entry;

    // Webpack manifest (pre-generated script ready for injection, see above)
    webpackManifest = manifest.chunksSerialized;

    preloadScripts = [
      // Push entry script first, we need to start loading as soon as possible
      // because we need it immediately
      entry
    ];

    // Append chunk of important routes to the preload list
    // Logic can be customized as needed. Can get complicated for recursive routes
    // or routes deep in site's hierarchy, so not always worth it
    if (req.path === '/') {
      preloadScripts.push(manifest.routes.home);
    } else {
      const route = req.path.substr(1);
      if (manifest.routes[ route ]) {
        preloadScripts.push(manifest.routes[ route ]);
      }
    }
  } else {
    entry = 'main.js';
    preloadScripts = ['vendor.js', entry];
  }

  // Asset preloading
  // These headers may be picked by supported CDNs or other reverse-proxies and push the assets via HTTP/2
  // To disable PUSH, append "; nopush"
  // More details: https://blog.cloudflare.com/announcing-support-for-http-2-server-push-2/
  const linkHeaders = [...preloadScripts.map(script => `\</js/${script}\>; rel=preload; as=script`)];

  // Append Link headers
  res.set('Link', linkHeaders);

  res.render('index', {
    ie: req.get('user-agent').indexOf('MSIE') > -1,
    webpackManifest,
    entry
  });
});

module.exports = app;
