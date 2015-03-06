# Closure Library

A mirror of the upstream [Google Closure Library](https://github.com/google/closure-library) but repackaged for npm and without global namespace pollution.

## Status

[![npm version][npm-image]][npm-url]

## Installation

Install the package via `npm`:

```sh
npm install --save seegno-closure-library
```

## Usage

```js
var goog = require('seegno-closure-library')

global.goog === undefined;
// => true

goog.require;
// => [Function]

goog.require('goog.string.linkify');
// => undefined

goog.string.linkify.linkifyPlainText('Foo https://www.bar.com');
// => 'Foo <a rel="nofollow" target="_blank" href="https://www.bar.com">https://www.bar.com</a>'
```

## Loading a dependency file

Generate a dependency file by using `closure/bin/build/depswriter.py` and load it using the special `loadScript` function from `goog`:

```js
var goog = require('seegno-closure-library');

goog.loadScript(__dirname + 'lib/closure/goog/deps.js');
```

## Updating from upstream

The `master` branch is always merged with `upstream/master` without fast forwarding commits:

```bash
git remote add upstream git@github.com:google/closure-library
git fetch upstream
git merge --no-ff upstream/master
```

# Licenses

This package is licensed under MIT. The bundled Google Closure Library is licensed under Apache 2.0.

[npm-image]: https://img.shields.io/npm/v/seegno-closure-library.svg?style=flat-square
[npm-url]: https://npmjs.org/package/seegno-closure-library
