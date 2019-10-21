# `@noutc/semantic-release-config`

## Usage

From the project where you would like to use these settings, run

```bash
npm install @noutc/semantic-release-config --save-dev
```

Then modify your `package.json` to include the following code block. If you already have a `release` configuration defined there, you'll need to modify it.

```json5
  // ...
  "release": {
    "extends": "@noutc/semantic-release-config
  }
  // ...
```

## References

- [Semantic Release Shared Configs](https://github.com/semantic-release/semantic-release/blob/caribou/docs/usage/shareable-configurations.md)
