The Ultimate Starter Kit For React Redux and Webpack
=======================
>React/Redux/Hot-reloading/Webpack/React-router/Express/Enzyme

[![Build Status](https://travis-ci.org/touqeerkhan11/The-Ultimate-Boilerplate.svg?branch=master)](https://travis-ci.org/touqeerkhan11/The-Ultimate-Boilerplate)

**Live Demo**: https://secret-taiga-34450.herokuapp.com/

Scripts
---------------

The easiest way to get started is to clone the repository:

- `npm install` to download dependencies
- `npm run dev` for starting a dev server with hot-reloading
- `npm run build` for building production ready webpack build
- `npm start` for launching production server
- `test:watch` for starting mocha testing util with a watch flag

update the package if needed `npm install -g npm-check-updates` -> `ncu -u`


Table of Contents
-----------------

- [Features](#features)
- [Todo](#todo)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Pro Tips](#pro-tips)

Features
--------
- **Development server** with
 - React-hotloader3
 - React router redux
 - Redux reducer hot-reloading
 - Redux dev tool for chrome
- **Production server** with
 - Webpack code chunking
 - Environment variables
 - Optimization and code compression
 - Api and database connection ready
- **Webpack** with
 - Babel loading
 - File loading for img/fonts
 - Sass/Css/Style loading
 - Preloader for linting
- Mocha test utils with enzyme
- Eslinting for React

Todo
--------
- Webpack code splitting (PR welcomed)
- Server side rendering 
- New test driven interactive component 

Project Structure
--------

| Name                                         | Description                                                  |
| ----------------------------------           | ------------------------------------------------------------ |
| **bin**/www                                  | Express server configuration.  |
| **config**/.env                              | Your API keys, tokens, passwords and database URI.           |
| **public**/                                  | Complied bundles for production (fonts, js, img, html)             |
| **src**/**actions**/                         | Redux action files for each component (with redux-thunk).                       |
| **src**/**components**/**container**/        | [Statefull](http://stackoverflow.com/documentation/reactjs/1185/components/4649/creating-components#t=20161019121953341148) container components with redux state connection.       |
| **src**/**components**/**presentationals**/  | [Stateless](http://stackoverflow.com/documentation/reactjs/1185/components/4649/creating-components#t=20161019121953341148) dumb components.                  |
| **src**/**constants**/index.js               | Constants. Used for defining action types. |
| **src**/**reducers**/index.js                | Combines all the reducer for later use while configuring store.               |
| **src**/**reducers**/motherReducer.js        | Contains all the reducers logic.|
| **src**/**routes**/index.js                  | Your react-router routes goes in this file.      |
| **src**/**store**/index.js                   | Configuration for redux store with middlewares. (chrome dev tool, redux thunk)|
| **src**/**styles**/                          | Main stylesheet for your app (use only for storing fonts and main style sheets) rest of the style sheets goes with the containing folder.                 |
| **src**/app.js                               | Root file with reactDom renderer.                       |
| **src**/index.html                           | Main html file for both production and development servers.                                         |
| .babelrc                                     | Babel presets and plugins to use with webpack.                                               |
| .eslintrc                                    | Eslint configuration for React.                                          |
| .travis.yml                                  | [Travis CI](https://travis-ci.org/) integration.             |
| app.js                                       | Express production server configuration.                                   |
| dev-server.js                                | Development server configuration. With overridden express app to use API's and secret later on if any.                                           |
| package.json                                 | NPM dependencies.                                            |
| test.config.js                               | Mocha and Enzyme configuration for testing components.                                            |
| webpack.base.js                              | Base config file for webpack. Use this to resolve dicrectories which are used in both prod and dev servers. Also add mutuals loaders in this file.                                            |
| webpack.dev.js                               | Development webpack configuration file.                                            |
| webpack.prod.js                              | Production webpack configuration file.                                            |

List of Packages
--------
| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| axios                           |               |
| body-parser                     |               |
| cookie-parser                   |               |
| express                         |               |
| express-history-api-fallback    |               |
| morgan                          |               |
| node-sass                       |               |
| react                           |               |
| react-bootstrap                 |               |
| react-dom                       |               |
| react-redux                     |               |
| react-router                    |               |
| react-router-redux              |               |
| redux                           |               |         
| redux-thunk                     |               |
| serve-favicon                   |               |
| autoprefixer-loader             |               |
| babel-cli                       |               |
| babel-core                      |               |
| babel-eslint                    |               |
| babel-loader                    |               |
| babel-polyfill                  |               |
| babel-preset-es2015-loose       |               |
| babel-preset-react              |               |
| babel-preset-stage-0            |               |
| babel-register                  |               |
| css-loader                      |               |
| debug                           |               |
| deep-freeze-strict              |               |
| enzyme                          |               |
| eslint                          |               |
| eslint-loader                   |               |
| eslint-plugin-react             |               |
| expect                          |               |
| extract-text-webpack-plugin     |               |
| file-loader                     |               |
| html-webpack-plugin             |               |
| jsdom                           |               |
| mocha                           |               |
| node-env-file                   |               |
| react-addons-test-utils         |               |
| react-hot-loader                |               |
| sass-loader                     |               |
| script-loader                   |               |
| style-loader                    |               |
| webpack                         |               |
| webpack-dev-server              |               |
| webpack-merge                   |               |

Pro Tips
--------
Well actually I dont have any pro tips because I am also a noob (lol, no seriously) but the thing is I **wasted** alot of time configuring react-hot-loader and webpack when I started learning React and the point of this starter kit is that YOU dont have to. There are alot of starter kits out there and trust me I have checked all of them but they all lack one thing SIMPLICITY. So what I tried is to build the most simplistic boilerplate with EVERY (well almost) feature out there that we may require before starting developement with react. Thank you and cheers.
