const R = require('ramda')

const isPathValueNull = obj => path => (
  R.isNil(R.path(R.split('.', path), obj))
)

const pickPathValue = obj => path => ({
  path: R.split('.', path),
  value: R.path(R.split('.', path), obj)
})

const createPathValueList = obj => propsPathList => (
  R.map(R.ifElse(isPathValueNull(obj), R.always({}), pickPathValue(obj)))(propsPathList)
)

const setPathValue = (path, obj) => value => (
  R.set(R.lensPath(path), value, obj)
)

const mergePathValueList = (mergedPath, { path, value }) => (
  R.ifElse(R.isNil, R.always(mergedPath), setPathValue(path, mergedPath))(value)
)

const createPickedObject = pathValueList => (
  R.reduce(mergePathValueList, {}, pathValueList)
)

const pokeprop = (propsPathList, obj) => (
  R.pipe(createPathValueList(obj), createPickedObject)(propsPathList)
)

module.exports = R.curry(pokeprop)
