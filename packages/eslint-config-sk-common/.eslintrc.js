module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      impliedStrict: true,
      // experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
  },
  globals: {
    expect: true,
    global: true,
  },
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'shared-node-browser': true,
    serviceworker: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'promise', 'compat', 'prettier', 'jest', 'sort-class-members'],
  rules: {
    'compat/compat': 'error',
    'no-console': 'warn',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
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
        trailingComma: 'es5',
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
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'warn',
    'no-mixed-operators': 'warn',
    'no-plusplus': 'off',
    'linebreak-style': ['error', 'unix'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.jsx'],
        // This adds ./src for relative imports.
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
