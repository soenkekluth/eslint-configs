module.exports = {
  extends: [
    'eslint-config-sk-common',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: ['html', 'flowtype', 'react'],
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
