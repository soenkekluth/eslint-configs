/* eslint-env node */

'use strict';

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  globals: {
    expect: true,
  },
  env: {
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['compat', 'prettier', 'sort-class-members'],
  rules: {
    'sort-class-members/sort-class-members': [
      2,
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
          '[event-handlers]',
        ],
        groups: {
          'event-handlers': [{ name: '/on.+/', type: 'method' }],
        },
        accessorPairPositioning: 'getThenSet',
        stopAfterFirstProblem: false,
      },
    ],
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
