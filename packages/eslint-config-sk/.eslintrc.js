module.exports = {
  extends: ['sk-node'],
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
