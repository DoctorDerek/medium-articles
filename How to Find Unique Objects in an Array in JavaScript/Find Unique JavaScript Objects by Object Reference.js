// By default, Set compares JS object references
const myObject = { hello: "🌞" }
const objectsArray = [myObject, myObject]
const objectsSet = new Set(objectsArray)
const uniqueObjectReferences = Array.from(objectsSet)
// Equivalent to: (using the spread operator)
// const uniqueObjectReferences = [...objectsSet]

console.log(objectsArray)
// Output: [ { hello: "🌞" }, { hello: "🌞" } ]

console.log(uniqueObjectReferences)
// Output: [ { hello: "🌞" } ]

// One-liner:
console.log([...new Set([myObject, myObject])])
// Output: [ { hello: "🌞" } ]

// Compare to different objects with same contents:
console.log([...new Set([{ id: 1 }, { id: 1 }])])
// Output: [ { id: 1 }, { id: 1 } ]
