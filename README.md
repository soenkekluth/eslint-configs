# eslint-configs

[ESLint](http://eslint.org) config using [Prettier](https://github.com/prettier/prettier) and [sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) for code formatting and unification. [jest](https://www.npmjs.com/package/eslint-plugin-jest) for testing.


## Install

### [yarn](https://yarnpkg.com)

`yarn add eslint eslint-config-sk -D -E`

### [npm](https://npmjs.com)
`npm i -D eslint eslint-config-sk`

## Usage

### create a eslint config file type of your choice

`.eslintrc.js`

```js
module.exports = {
  extends: ["sk"]
};
```

`.eslintrc.json`

```json
{
  "extends": ["sk"]
}
```

`.eslintrc`

```json
  extends: 'sk'
```

`.eslintrc.yml`

```json
  extends: 'sk'
```

### Add lint scripts

Add scripts to `package.json`:

```json
"scripts": {
  "lint": "yarn eslint .",
  "lint:fix": "yarn lint --fix"
}
```

### Lint manually

* Run `yarn lint` to lint your code.
* Run `yarn lint:fix` to lint, format and fix your code.


```json
{
  "env": {
    "jest/globals": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": false,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": false,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": false,
      "regexUFlag": false,
      "regexYFlag": false,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodePointEscapes": true,
      "globalReturn": false,
      "jsx": true
    }
  },
  "extends": [
    "plugin:flowtype/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "promise",
    "flowtype",
    "import",
    "jest",
    "prettier"
  ],

  "rules": {
    "no-duplicate-imports": "off",
    "prettier/prettier": "error",
    "flowtype/no-types-missing-file-annotation":"off"
  }
}

```


## 2

```json
{
  "env": {
    "browser": false,
    "node": true,
    "es6": true,
    "commonjs": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": false,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": false,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": false,
      "regexUFlag": false,
      "regexYFlag": false,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodePointEscapes": true,
      "globalReturn": false,
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "plugins": ["babel", "flowtype", "flowtype-errors", "private-props"],
  "extends": ["plugin:flowtype/recommended"],
  "rules": {
    "private-props/no-unused-or-undeclared": 0,
    "private-props/no-use-outside": 2,
    "no-cond-assign": [1, "except-parens"],
    "no-console": 0,
    "no-constant-condition": 1,
    "no-control-regex": 1,
    "no-debugger": 1,
    "no-dupe-args": 1,
    "no-dupe-keys": 1,
    "no-duplicate-case": 0,
    "no-empty-character-class": 1,
    "no-empty": 0,
    "no-ex-assign": 1,
    "no-extra-boolean-cast": 1,
    "no-extra-parens": 0,
    "no-extra-semi": 1,
    "no-func-assign": 1,
    "no-inner-declarations": [0, "functions"],
    "no-invalid-regexp": 1,
    "no-irregular-whitespace": 0,
    "no-negated-in-lhs": 1,
    "no-obj-calls": 1,
    "no-regex-spaces": 1,
    "no-reserved-keys": 0,
    "no-sparse-arrays": 1,
    "no-unexpected-multiline": 1,
    "no-unreachable": 1,
    "use-isnan": 1,
    "valid-jsdoc": 0,
    "valid-typeof": 1,
    "accessor-pairs": 0,
    "block-scoped-var": 0,
    "complexity": 0,
    "consistent-return": 1,
    "curly": [1, "all"],
    "default-case": 0,
    "dot-notation": [
      0,
      {
        "allowKeywords": true,
        "allowPattern": ""
      }
    ],
    "dot-location": [1, "property"],
    "eqeqeq": [
      1,
      "always",
      {
        "null": "ignore"
      }
    ],
    "guard-for-in": 0,
    "no-alert": 0,
    "no-caller": 1,
    "no-div-regex": 1,
    "no-else-return": 0,
    "no-eq-null": 0,
    "no-eval": 1,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-fallthrough": 0,
    "no-floating-decimal": 1,
    "no-implied-eval": 1,
    "no-iterator": 1,
    "no-lone-blocks": 1,
    "no-loop-func": 1,
    "no-multi-spaces": 0,
    "no-multi-str": 1,
    "no-native-reassign": 1,
    "no-new-func": 1,
    "no-new-wrappers": 1,
    "no-new": 1,
    "no-octal-escape": 1,
    "no-octal": 1,
    "no-param-reassign": 0,
    "no-process-env": 0,
    "no-proto": 1,
    "no-redeclare": 1,
    "no-return-assign": 0,
    "no-script-url": 0,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-throw-literal": 1,
    "no-unused-expressions": 0,
    "no-void": 0,
    "no-warning-comments": [
      1,
      {
        "terms": [],
        "location": "start"
      }
    ],
    "no-with": 1,
    "radix": 1,
    "vars-on-top": 1,
    "wrap-iife": [1, "inside"],
    "yoda": [1, "never"],
    "strict": [1, "never"],
    "no-catch-shadow": 0,
    "no-delete-var": 1,
    "no-label-var": 1,
    "no-shadow-restricted-names": 1,
    "no-shadow": 1,
    "no-undef-init": 1,
    "no-undef": 1,
    "no-undefined": 0,
    "no-unused-vars": [
      0,
      {
        "vars": "local",
        "args": "after-used"
      }
    ],
    "handle-callback-err": 1,
    "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    "no-process-exit": 1,
    "no-restricted-modules": [1, ""],
    "array-bracket-spacing": [1, "never"],
    "brace-style": [
      1,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": [
      1,
      {
        "properties": "always"
      }
    ],
    "comma-spacing": [
      1,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [1, "last"],
    "computed-property-spacing": 0,
    "consistent-this": 0,
    "eol-last": 1,
    "func-names": 0,
    "func-style": 0,
    "indent": ["warn", 2, {"SwitchCase": 1}],
    "linebreak-style": 0,
    "max-nested-callbacks": [0, 3],
    "new-cap": 0,
    "new-parens": 1,
    "newline-after-var": 0,
    "no-array-constructor": 1,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 0,
    "no-mixed-spaces-and-tabs": 1,
    "no-multiple-empty-lines": [
      1,
      {
        "max": 3
      }
    ],
    "no-nested-ternary": 0,
    "no-new-object": 1,
    "no-spaced-func": 1,
    "no-ternary": 0,
    "no-trailing-spaces": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 1,
    "object-curly-spacing": 0,
    "one-var": [1, "never"],
    "operator-assignment": [0, "never"],
    "padded-blocks": [0, "never"],
    "quote-props": [0, "as-needed"],
    "semi-spacing": [
      1,
      {
        "before": false,
        "after": true
      }
    ],
    "semi": [1, "always"],
    "sort-vars": 0,
    "space-after-keywords": 0,
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [0, "never"],
    "space-in-parens": [0, "never"],
    "space-infix-ops": 0,
    "keyword-spacing": 1,
    "space-unary-ops": 0,
    "wrap-regex": 1,
    "constructor-super": 1,
    "generator-star-spacing": [1, "after"],
    "no-this-before-super": 1,
    "no-var": 1,
    "object-shorthand": [0, "consistent"],
    "prefer-const": [
      1,
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "max-depth": [0, 3],
    "max-len": [1, 99999, 2],
    "max-params": 0,
    "max-statements": 0,
    "no-bitwise": 0,
    "no-plusplus": 0,
    "babel/new-cap": 0,

    "flowtype-errors/show-errors": 2
  }
}

```

```json
{
  "env": {
    "jest/globals": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": false,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "experimentalObjectRestSpread": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": false,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": false,
      "regexUFlag": false,
      "regexYFlag": false,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodePointEscapes": true,
      "globalReturn": false,
      "jsx": true
    }
  },
  "extends": [
    "plugin:flowtype/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "promise",
    "flowtype",
    "import",
    "jest",
    "prettier"
  ],

  "rules": {
    "no-duplicate-imports": "off",
    "prettier/prettier": "error",
    "flowtype/no-types-missing-file-annotation":"off"
  }
}

```