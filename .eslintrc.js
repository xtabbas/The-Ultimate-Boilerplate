module.exports = {
  'env': {
    'es6': true,
    'meteor': true,
    'node': true,
    'browser': true
  },
  'extends': 'airbnb',
  'ecmaFeatures': {
      'sourceType': 'module',
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': [
  ],
  'globals': {
    'describe': true,
    'it': true,
    'beforeEach': true,
    'before': true,
    'afterEach': true,
    'after': true,
    'expect': true,
    'assert': true,
    'browser': true,
    'server': true
  },
  'rules': {
    'arrow-body-style': [ 0 ],
    'comma-dangle': [ 2, 'never' ],
    'computed-property-spacing': [ 2, 'always' ],
    'eqeqeq': [ 2, 'smart' ],
    'indent': [ 2, 2, { 'VariableDeclarator': 2 } ],
    'linebreak-style': [ 2, /^win/.test(process.platform) ? 'windows' : 'unix' ],
    'no-console': [ 0 ],
    'no-underscore-dangle': [ 0 ],
    'no-unneeded-ternary': [ 2 ],
    'no-underscore-dangle': [ 0 ],
    'object-curly-spacing': [ 2, 'always' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'always' ],
    'space-infix-ops': [ 2 ],
    'import/no-unresolved': 0,
    'new-cap': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'import/imports-first': 0,
    'react/jsx-boolean-value': 0,
    'import/no-duplicate': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-no-bind': 0,
    'no-unused-expressions': ["error", { "allowTernary": true }],
    'import/extensions': ['off', 'never'],
    "react/forbid-prop-types": [0]
  }
};
