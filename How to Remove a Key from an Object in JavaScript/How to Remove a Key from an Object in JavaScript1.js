const myObject = { key: "🍫" }
myObject.key2 = "🍬"
myObject.key3 = "🍭"
console.log(delete myObject.key)
myObject.key2 = undefined
console.table(Object.entries(myObject))
// (index) key  value
//    0    key2 undefined
//    1    key3 🍭

// Keys not on the object are undefined
console.log(myObject.key4) // undefined
// delete returns true for non-existent keys
console.log(delete myObject.key4) // true
console.log(myObject.key) // undefined
console.log(delete myObject.key) // true

// You can't delete variables, just keys
console.log(delete myObject) // false
