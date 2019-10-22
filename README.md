# `dev-config`

> Shared development configurations for NOUTC projects

This repository contains configuration settings for various development tools used across NOUTC projects. This allows us to avoid boilerplate when creating projects, have a consistent settings across projects, and simplify workflows in general.

## [`@noutc/dev-config`](./packages/dev-config)

Configurations for EditorConfig, Prettier, Husky, and more. See the [README](./packages/dev-config#readme) for more. This package is dependent on two other packages (that need to be separate NPM packages for the particular tool's shared configuration mechanism to work):

- [`@noutc/eslint-config`](./packages/eslint-config)
- [`@noutc/semantic-release-config`](./packages/semantic-release-config)

## [`@noutc/typescript-boilerplate`](./packages/typescript-boilerplate)

An opinionated setup for Typescript projects including tools such as `jest`, `typedoc`, and `ts-node-dev`. See the [README](./packages/typescript-boilerplate) for more.

## Contributing

Clone this project

```bash
git clone git@github.com/noutcinc/dev-config.git
```

Install the root project dependencies

```bash
npm install
```

Install the sub-module dependencies

```bash
npx lerna bootstrap
```

## Releasing new versions

The releases are currently manually generated. Make sure you have the latest `master` branch of this repository, and are in the root folder when running:

```bash
git checkout master && git pull
```

To automatically increase the version numbers for each project based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) and release them, run:

```bash
npx lerna publish
```
