# eslint-config-sk

production ready es6 [ESLint](http://eslint.org) configs using  [**Prettier**](https://github.com/prettier/prettier) and [**sort-class-members**](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) for code formatting and unification, [**compat**](https://www.npmjs.com/package/eslint-plugin-compat) and [**browserslist**](https://github.com/browserslist/browserslist) to make use of [**caniuse**](http://caniuse.com/) and [**@kangax's compat table**](http://kangax.github.io/compat-table/es6/) for determining coverage and 

[**jest**](https://www.npmjs.com/package/eslint-plugin-jest) for testing.


## Install

### [yarn](https://yarnpkg.com)

```sh
yarn add eslint eslint-config-sk-sk -D -E
```

### [npm](https://npmjs.com)

```sh
npm i -D eslint eslint-config-sk-sk
```


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


## Related 

* [eslint-config-sk-browser](https://www.npmjs.com/package/eslint-config-sk-browser)
* [eslint-config-sk-node](https://www.npmjs.com/package/eslint-config-sk-node)
* [eslint-config-sk-flow](https://www.npmjs.com/package/eslint-config-sk-flow)
* [eslint-config-sk](https://www.npmjs.com/package/eslint-config-sk)
* [eslint-scripts-sk ](https://www.npmjs.com/package/eslint-scripts-sk)
* [eslint-config-sk-common ](https://www.npmjs.com/package/eslint-config-sk-common)
