# managr-plugin-download

> Implements a single file action for downloading files for [managr](https://github.com/axe312ger/managr)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://axe312.mit-license.org)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.com/axe312ger/managr-plugin-download.svg?token=fyDxSEex8FXB9BKySX88&branch=master)](https://travis-ci.com/axe312ger/managr-plugin-download)
[![CodeCov Badge](https://img.shields.io/codecov/c/token/ydik3xWHpF/github/axe312ger/managr-plugin-download.svg)](https://codecov.io/gh/axe312ger/managr-plugin-download)
[![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Install

```js
npm install --save managr-plugin-download
```

## Usage

```js
// Import plugin
import { downloadPlugin } from 'managr-plugin-download'

// Add to your configuration
const managrConfiguration = {
  ...
  plugins: [
    new downloadPlugin()
  ]
  ...
}
```

## Options

Currently there are no options for this plugin available. Feel free to contribute.

## Development

This project follows the [standard](https://github.com/feross/standard) coding and the [conventional changelog](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md) commit message style. Also it is configured to never decrease the code coverage of its tests.

For development in real project environments, link a clone of this module via [npm link](https://docs.npmjs.com/cli/link) into any managr instance you want.

Also make sure you check out all available npm scripts via `npm run`.

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/axe312ger/managr-plugin-download/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.
