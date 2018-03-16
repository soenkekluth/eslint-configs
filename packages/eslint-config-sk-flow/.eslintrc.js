module.exports = {
  extends: ['sk-common'],
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
