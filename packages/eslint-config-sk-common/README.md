# eslint-config-sk-common


production ready es6 [ESLint](http://eslint.org) configs using  [**Prettier**](https://github.com/prettier/prettier) and [**sort-class-members**](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) for code formatting and unification, [**compat**](https://www.npmjs.com/package/eslint-plugin-compat) and [**browserslist**](https://github.com/browserslist/browserslist) to make use of [**caniuse**](http://caniuse.com/) and [**@kangax's compat table**](http://kangax.github.io/compat-table/es6/) for determining coverage and 

[**jest**](https://www.npmjs.com/package/eslint-plugin-jest) for testing.

## Install

### [yarn](https://yarnpkg.com)

```sh
yarn add eslint eslint-config-sk-common -D -E
```

### [npm](https://npmjs.com)

```sh
npm i -D eslint eslint-config-sk-common
```

## Usage

### create a eslint config file type of your choice

`.eslintrc.js`

```js
module.exports = {
  extends: ["sk-common"]
};
```

`.eslintrc.json`

```json
{
  "extends": ["sk-common"]
}
```

`.eslintrc`

```json
  extends: 'sk-common'
```

`.eslintrc.yml`

```json
  extends: 'sk-common'
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
