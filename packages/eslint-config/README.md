# `@noutc/eslint-config`

## General Usage

From the project where you would like to use the4se settings, run

```bash
npm install @noutc/eslint-config --save-dev
```

Then modify your `package.json` to include the following code block. If you already have a `eslintConfig` configuration defined there, you`ll need to modify it.

```json5
  // ...
  "eslintConfig": {
    "extends": "@noutc/eslint-config"
  }
  // ...
```

## Using with React.js based projects

From the project where you would like to use these settings, run

```bash
npm install @noutc/eslint-config eslint-plugin-react react-hooks --save-dev
```

Then modify your `package.json` to include the following code block. If you already have a `eslintConfig configuration defined there, you`ll need to modify it.

```json5
  // ...
  "eslintConfig": {
    "extends": "@noutc/eslint-config/eslint-config/react"
  }
  // ...
```

## References

- [ESLint Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-config-prettier)
