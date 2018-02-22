/* eslint-env node */

'use strict';

module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module', // es6 import/export
  },
  globals: {
    expect: true,
  },
  env: {
    node: true,
    es6: true,
  },
  // parser: 'babel-eslint', // class properties
  plugins: ['node', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 120,
        proseWrap: 'preserve',
        semi: true,
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
};
