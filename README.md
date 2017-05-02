[![Build Status](https://travis-ci.org/vitorabner/pokeprop.svg?branch=master)](https://travis-ci.org/vitorabner/pokeprop) [![Coverage Status](https://coveralls.io/repos/github/vitorabner/pokeprop/badge.svg?branch=feature%2Fadd-coveralls)](https://coveralls.io/github/vitorabner/pokeprop?branch=feature%2Fadd-coveralls)

<p align="center">
  <img src="https://preview.ibb.co/etXhBQ/pokeprop.png"/>
</p>

> Pick multiples properties from JSON

## Install

```
$ npm install --save pokeprop
```
## Usage

```js
const pokeprop = require('pokeprop')

const object = {
  company: {
    facebook: {
      ceo: 'Mark Zuckerberg',
      products: ['facebook', 'instagram', 'oculus rift']
    },
    microsoft: {
      ceo: 'Satya Nadella',
      products: ['Office', 'windows', 'xbox']
    }
  },
  products: {
    games: ['oculus rift', 'xbox'],
    network: ['facebook', 'instagram']
  }
}

const pickedPropsObject = pokeprop([
  'company.facebook.products',
  'products.games',
  'company.microsoft.ceo'
], object)

// Also it's possible to use pokeprop([paths])(object)

//  Output:
//  pickedPropsObject = {
//    company: {
//      facebook: {
//        products: ['facebook', instagram', 'oculus rift']
//      },
//      microsoft: {
//        ceo: ['Satua Nadella']
//      }
//    },
//    products: {
//      games: ['oculus rift', 'xbox']
//    }
//  }

```

## License

MIT © [Vitor Abner](https://github.com/vitorabner/)
