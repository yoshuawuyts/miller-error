# miller-error
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Schema validator for error objects. Built with [miller][miller].

## Installation
```bash
$ npm i --save miller-error
```
## Overview
Validate an object. Either throws a `TypeError` or returns the same object.
```js
var errSchema = require('miller-error');

errSchema({
  error: new Error('login error'),
  message: 'Whoops, something went wrong with the login',
  statusCode: 1
});
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/miller-error.svg?style=flat-square
[npm-url]: https://npmjs.org/package/miller-error
[travis-image]: https://img.shields.io/travis/yoshuawuyts/miller-error.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/miller-error
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/miller-error.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/miller-error?branch=master

[miller]: http://github.com/yoshuawuyts/miller
