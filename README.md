# stray-dict

  loose dict functions
  works with objects with tilde-prefixed keys

## Installation

    npm install stray-dictk

## API

  all keys are strings

### set(obj, key, value)
### get(obj, key)

  throws if key not present

### get(obj, key, default)
### has(obj, key) → Boolean
### keys(obj) → [String]
### reduce(obj, function(acc, key, value, obj), initialValue, thisObj)
