## The-Ultimate-React-Redux-Webpack-Boilerplate
>React/Redux/Hot-reloading/Webpack/React-router/Express

### List of features

  * Development server with react-hotloader 3
  * Redux dev tool for chrome and react-router-redux
  * Deploy ready production server using Express
  * Environment variables configured with webpack
  * Mocha testing utils with enzyme and jsdom
  * Eslinting for react
  * Webpack configuration features
    * Webpack Loaders
      * Sass/Css/Style Loaders
      * Babel Loader
      * Fonts loading with webpack
      * Preloader for lintin
      * File loader for fonts and images
    * Webpack Plugings
      * For development server
        * HotModuleReplacementPlugin
        * DefinePlugin
        * HtmlWebpackPlugin
      * For production server
        * UglifyJsPlugin
        * DefinePlugin
        * CommonsChunkPlugin
        * HtmlWebpackPlugin
        

### Todo
  * Webpack code splitting (PR welcomed)
  * Server side rendering 
  * Writing tests with enzyme for modal 
  * Add new interactive components with tests 
  
### Live demo
* https://secret-taiga-34450.herokuapp.com/

### Scripts ?
* `npm install` to download dependencies
* `npm run dev` for starting a dev server with hot-reloading
* `npm run build` for building production ready webpack build
* `npm start` for launching production server
* `test:watch` for starting mocha testing util with a watch flag

update the package if needed `npm install -g npm-check-updates` -> `ncu -u`
