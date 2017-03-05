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
      configureStore: path.resolve(__dirname, 'src/store/configureStore')
    },
    extensions: ['.js']
  },
  module: {
    rules: []
  }
};
