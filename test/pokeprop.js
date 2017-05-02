const { test } = require('ava')
const pokeprop = require('../src/pokeprop')

test('pokeprop: pick lib property from an object with one property', t => {
  const object = { lib: 'pokeprop' }
  const picked = pokeprop(['lib'], object)
  t.deepEqual(picked, object)
})

test('pokeprop: pick lib.name property from an object with nested property', t => {
  const object = { lib: { name: 'pokeprop' } }
  const picked = pokeprop(['lib.name'], object)
  t.deepEqual(picked, object)
})

test('pokeprop: pick multiplies properties from an object with multiples properties', t => {
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

  const picked = pokeprop([
    'company.facebook.products',
    'products.games',
    'company.microsoft.ceo'
  ], object)

  t.deepEqual(picked, {
    company: {
      facebook: {
        products: ['facebook', 'instagram', 'oculus rift']
      },
      microsoft: {
        ceo: 'Satya Nadella'
      }
    },
    products: {
      games: ['oculus rift', 'xbox']
    }
  })
})

test('pokeprop: pick lib property from an object with one property using curried pokeprop', t => {
  const object = { lib: 'pokeprop' }
  const picked = pokeprop(['lib'])(object)
  t.deepEqual(picked, object)
})
