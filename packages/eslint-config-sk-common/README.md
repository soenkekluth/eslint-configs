# eslint-config-sk-common

[ESLint](http://eslint.org) config using [Prettier](https://github.com/prettier/prettier) and [sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) for code formatting and unification. [jest](https://www.npmjs.com/package/eslint-plugin-jest) for testing.


## Install

### [yarn](https://yarnpkg.com)

`yarn add eslint eslint-config-sk-common -D -E`

### [npm](https://npmjs.com)
`npm i -D eslint eslint-config-sk-common`

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
