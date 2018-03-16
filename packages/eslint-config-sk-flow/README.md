# eslint-config-sk-flow

[ESLint](http://eslint.org) config using [Prettier](https://github.com/prettier/prettier) and [sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) for code formatting and unification. [jest](https://www.npmjs.com/package/eslint-plugin-jest) for testing.


## Install

### [yarn](https://yarnpkg.com)

`yarn add eslint eslint-config-sk-flow -D -E`

### [npm](https://npmjs.com)
`npm i -D eslint eslint-config-sk-flow`

## Usage

### create a eslint config file type of your choice

`.eslintrc.js`

```js
module.exports = {
  extends: ["sk-flow"]
};
```

`.eslintrc.json`

```json
{
  "extends": ["sk-flow"]
}
```

`.eslintrc`

```json
  extends: 'sk-flow'
```

`.eslintrc.yml`

```json
  extends: 'sk-flow'
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