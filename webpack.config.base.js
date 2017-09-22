const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/components/containers'),
      path.resolve(__dirname, 'src/components/presentationals'),
      'node_modules'
    ],
    alias: {
      src: path.resolve(__dirname, 'src'),
      react: path.join(__dirname, 'node_modules', 'react'),
      configureStore: path.resolve(__dirname, 'src/store/configureStore'),
      components: 'src/components',
      containers: 'src/containers',
      modules: 'src/modules',
      routes: 'src/routes',
      shared: 'src/shared',
      style: 'src/style',
      utils: 'src/utils'
    },
    extensions: ['.js']
  },
  module: {
    rules: []
  }
};
