# eslint-config-kluth

[ESLint](http://eslint.org) config using [Prettier](https://github.com/prettier/prettier) for code formatting and unification.

## Install

### [Yarn](https://yarnpkg.com)

`yarn add eslint-config-kluth -D -E`

#### Add peer dependencies

`yarn add eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier -D -E`.

## Usage

* Create `.eslintrc.js` configuration file:
  ```js
  module.exports = {
    extends: ['last'],
  };
  ```
* Add lint scripts to `package.json`:
  ```json
  "scripts": {
    "lint": "yarn eslint .",
    "lint:fix": "yarn lint --fix"
  }
```
* Run `yarn lint` to lint your code.
* Run `yarn lint:fix` to lint, format and fix your code.
