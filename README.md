# eslint-config-react

This config includes ReactJS rules. Should be used with [digitalazgroup/eslint-config](https://github.com/digitalazgroup/eslint-config).

## Installation

Install package as dev dependency:
```sh
yarn add -D digitalazgroup/eslint-config digitalazgroup/eslint-config-react
```

Add config to `.eslintrc.*`. Here's an example `.eslintrc.json` file:

```json
module.exports = {
  extends: [
    '@digitalazgroup',
    '@digitalazgroup/react'
  ],
};
```
