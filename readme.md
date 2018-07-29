# natori.proxy

[![Build Status](https://travis-ci.org/akameco/natori-proxy.svg?branch=master)](https://travis-ci.org/akameco/natori.proxy)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> proxy for 名取

## Install

```
$ yarn add natori.proxy
```

## Usage

```js
const 名取 = require('natori.proxy')

const sum = (a, b) => a + b
const 名取sum = 名取(sum, 'ってね')
// 各関数実行時に名取が再生される

console.log(名取sum(1, 2))
// => 3
// 「ってね」

console.log(名取sum(1, 2) + 名取sum(1, 2))
// => 6
// 「ってねを禁止されてね.禁止されってね...うははっ」, 「ってね」
```

## API

### `natoriProxy(func, keyword)`

#### func

#### keyword

Type: `string`<br>
Default: `てね`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/natori-proxy/commits?author=akameco "Code") [📖](https://github.com/akameco/natori-proxy/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/natori-proxy/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
