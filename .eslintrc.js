// http://eslint.org/docs/user-guide/configuring
module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    // Load default configuration for react
    'plugin:react/recommended',
    'google',
    // If you were to extend another popular
    // eslint config, you'd put it here
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Default no-unused-vars
    'no-unused-vars': 1,
    // jsx version of no-unused-vars
    'react/jsx-uses-vars': 1,
    'indent': ['error', 2],
    'react/prop-types': 0,
    'max-len': 0,
    'require-jsdoc': 0,
    'no-invalid-this': 0,
    'func-call-spacing': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
  },
}
