module.exports = {
  extends: ['eslint-config-sk-common'],
  plugins: ['html'],
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
