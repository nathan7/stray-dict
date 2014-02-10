'use strict';
var Dict = exports

function assertString(key) {
  if (typeof key != 'string') throw new TypeError('key isn\'t a string')
}

Dict.has = function(obj, key) {
  assertString(key)
  return '~' + key in obj
}

Dict.get = function(obj, key, def) {
  if (Dict.has(obj, key)) return obj['~' + key]
  if (arguments.length > 2) return def
  throw new Error('no such key: ' + key)
}

Dict.set = function(obj, key, val) {
  assertString(key)
  obj['~' + key] = val
}

Dict.reduce = function(obj, fn, acc, thisObj) {
  for (var key in obj) if (key[0] === '~')
    acc = fn.call(thisObj, acc, obj[key], key.slice(1), obj)
  return acc
}

Dict.keys = function(obj) {
  var arr = []
  for (var key in obj) if (key[0] === '~')
    arr.push(key.slice(1))
  return arr
}
