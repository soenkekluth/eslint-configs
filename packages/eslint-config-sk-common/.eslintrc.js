module.exports = {
  extends: ["eslint:recommended", "plugin:jest/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    }
  },
  globals: {
    expect: true,
    global: true
  },
  env: {
    es6: true,
    node: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  plugins: ["compat", "prettier", "jest", "sort-class-members"],
  rules: {
    "sort-class-members/sort-class-members": [
      2,
      {
        order: [
          "[static-properties]",
          "[static-methods]",
          "[properties]",
          "[conventional-private-properties]",
          "constructor",
          "[methods]",
          "[conventional-private-methods]",
          "[event-handlers]"
        ],
        groups: {
          "event-handlers": [{ name: "/on.+/", type: "method" }]
        },
        accessorPairPositioning: "getThenSet",
        stopAfterFirstProblem: false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "avoid",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 120,
        proseWrap: "preserve",
        semi: true,
        tabWidth: 2,
        useTabs: false
      }
    ],
    "class-methods-use-this": "off",
    "no-unused-expressions": "warn",
    "no-mixed-operators": "warn",
    "no-plusplus": "off",
    "linebreak-style": ["error", "unix"],
    "import/resolver": {
      node: {
        // This adds ./src for relative imports.
        moduleDirectory: ["node_modules", "src"]
      }
    }
  }
};
