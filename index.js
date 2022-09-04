// ARRAY FUNCTIONS 
function myFirst (arr, number) {
    if (typeof number !== 'number') {
      return arr[0]
    } else {
      let newArr = []
      for (let a = 0; a < number; a++){
        newArr.push(arr[a])
      }
      return newArr
    }
  }

function myLast (arr, number) {
    if (typeof number !== 'number') {
      return arr[arr.length - 1]
    } else {
      let newArr = []
      for (let a = 1; a <= number; a++) {
        newArr.unshift(arr[arr.length-a])
      }
      return newArr
    }
  }

// COLLECTION FUNCTIONS
function myEach (collection, callback) {
    let originalCollection = [...collection]

    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }

    for (let a = 0; a < originalCollection.length; a++) {
      callback(originalCollection[a])
    }
    return collection
  }

function myMap (collection, callback) {
    let originalCollection = [...collection]

    if ( collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }

    const newCollection = []
    for(let a = 0; a < originalCollection.length; a++) {
      const item = callback(originalCollection[a])
      newCollection.push(item)
    }
    return newCollection
  }

function myReduce (collection, callback, accumulator) {
    let originalCollection = [...collection]

    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }

    let currentValue = accumulator
    if(typeof accumulator !== 'number'){
      currentValue = originalCollection[0]

      for(let a = 1; a < originalCollection.length; a++) {
        currentValue = callback(currentValue, originalCollection[a], originalCollection)
      }
    } else { 

      for(let a = 0; a < originalCollection.length; a++) {
        currentValue = callback(currentValue, originalCollection[a], originalCollection)
      }
    }
    return currentValue
  }

function myFind (collection, predicate) {
    let originalCollection = [...collection]

    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }

    for (let a = 0; a < originalCollection.length; a++) {

      if (predicate(originalCollection[a])) {
        return originalCollection[a]
      }
    }
    return undefined
  }

function myFilter (collection, predicate) {
    let originalCollection = [...collection]

    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }

    const newCollection = []
    for (let a = 0; a < originalCollection.length; a++) {

      if (predicate(originalCollection[a])) {
        newCollection.push(originalCollection[a])
      }
    }
    return newCollection
  }
  
function mySize (collection) {
    let originalCollection = [...collection]

    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    return originalCollection.length
  }
  
// OBJECT FUNCTIONS 
function myKeys (obj) {
    const arr = []
    for (let key in obj) {
      arr.push(key)
    }
    return arr
  }
  
function myValues (obj) {
    const arr = []
    for (let key in obj) {
      arr.push(obj[key])
    }
    return arr
  }