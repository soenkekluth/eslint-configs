module.exports = {
  extends: [
    'eslint-config-sk-common',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['babel', 'flowtype', 'flowtype-errors', 'private-props', 'html', 'react'],
  globals: {
    browser: true,
  },
  env: {
    browser: true,
  },
  rules: {
    'flowtype-errors/show-errors': 2,
  },
  settings: {
    targets: ['last 2 versions'],
    polyfills: ['fetch', 'Promise'],
  },
};
