module.exports = {
  extends: [
    'eslint-config-sk-common',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:node/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['html', 'flowtype', 'node', 'react'],
  globals: {
    browser: true,
  },
  env: {
    browser: true,
  },
  settings: {
    targets: ['last 2 versions'],
    polyfills: ['fetch', 'Promise'],
  },
};
