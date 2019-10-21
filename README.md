# `dev-config`

> Shared development configurations for NOUTC projects

This repository contains configuration settings for various development tools used across NOUTC projects. This allows us to avoid boilerplate when creating projects, have a consistent settings across projects, and simplify workflows in general.

## Contributing

Clone this project

```bash
git clone git@github.com:No-One-Understands-the-Cloud-Inc/dev-config.git
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
